/*
 * Copyright © 2018 Cask Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
*/

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TAB_OPTIONS} from 'components/PipelineConfigurations/Store';
import {applyRuntimeArgs, updatePipeline, runPipeline} from 'components/PipelineConfigurations/Store/ActionCreator';
import IconSVG from 'components/IconSVG';
import T from 'i18n-react';
require('./ConfigurationsActionButtons.scss');

const PREFIX = 'features.PipelineConfigurations.ActionButtons';

const mapStateToProps = (state, ownProps) => {
  return {
    runtimeArgs: state.runtimeArgs,
    validToSave: state.validToSave,
    pipelineEdited: state.pipelineEdited,
    updatingPipeline: ownProps.updatingPipeline,
    updatingPipelineAndRunOrSchedule: ownProps.updatingPipelineAndRunOrSchedule,
    saveAndCloseModeless: ownProps.saveAndCloseModeless,
    saveAndRunOrSchedule: ownProps.saveAndRunOrSchedule,
    activeTab: ownProps.activeTab,
    actionLabel: ownProps.actionLabel
  };
};

const ConfigActionButtons = ({runtimeArgs, validToSave, pipelineEdited, updatingPipeline, updatingPipelineAndRunOrSchedule, saveAndCloseModeless, saveAndRunOrSchedule, activeTab, actionLabel}) => {
  return (
    <div className="configuration-step-navigation">
      <div className="apply-run-container">
        <button
          className="btn btn-primary apply-run"
          disabled={updatingPipelineAndRunOrSchedule || !validToSave}
          onClick={saveAndRunOrSchedule.bind(this, pipelineEdited)}
        >
          <span>{actionLabel}</span>
          {
            updatingPipelineAndRunOrSchedule ?
              <IconSVG
                name="icon-spinner"
                className="fa-spin"
              />
            :
              null
          }
        </button>
        <button
          className="btn btn-secondary"
          disabled={updatingPipeline || !validToSave}
          onClick={saveAndCloseModeless.bind(this, pipelineEdited)}
        >
          {
            updatingPipeline ?
              (
                <span>
                  Saving
                  <IconSVG
                    name="icon-spinner"
                    className="fa-spin"
                  />
                 </span>
              )
            :
              <span>Save</span>
          }
        </button>
        {
          activeTab === TAB_OPTIONS.RUNTIME_ARGS ?
            (
              <span className="num-runtime-args">
                {T.translate(`${PREFIX}.runtimeArgsCount`, {context: runtimeArgs.pairs.length})}
              </span>
            )
          :
            null
        }
      </div>
    </div>
  );
};

ConfigActionButtons.propTypes = {
  activeTab: PropTypes.string,
  runtimeArgs: PropTypes.object,
  validToSave: PropTypes.bool,
  pipelineEdited: PropTypes.bool,
  updatingPipeline: PropTypes.bool,
  updatingPipelineAndRunOrSchedule: PropTypes.bool,
  saveAndCloseModeless: PropTypes.func,
  saveAndRunOrSchedule: PropTypes.func,
  actionLabel: PropTypes.string
};

const ConnectedConfigActionButtons = connect(mapStateToProps)(ConfigActionButtons);

export default class ConfigurationsActionButtons extends Component {
  state = {
    // need 2 states here instead of just 1, to determine which button to show
    // spinning wheel on
    updatingPipeline: false,
    updatingPipelineAndRunOrSchedule: false
  };

  static propTypes = {
    onClose: PropTypes.func,
    activeTab: PropTypes.string,
    action: PropTypes.func
  };

  static defaultProps = {
    action: runPipeline
  };

  closeModeless = () => {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
  };

  closeModelessAndRunOrSchedule = () => {
    this.closeModeless();
    if (typeof this.props.action === 'function') {
      this.props.action();
    }
  };

  saveAndRunOrSchedule = (pipelineEdited) => {
    applyRuntimeArgs();
    if (!pipelineEdited) {
      this.closeModelessAndRunOrSchedule();
      return;
    }

    this.setState({
      updatingPipelineAndRunOrSchedule: true
    });
    updatePipeline()
    .subscribe(() => {
      this.closeModelessAndRunOrSchedule();
    }, (err) => {
      console.log(err);
    }, () => {
      this.setState({
        updatingPipelineAndRunOrSchedule: false
      });
    });
  }

  saveAndCloseModeless = (pipelineEdited) => {
    applyRuntimeArgs();
    if (!pipelineEdited) {
      this.closeModeless();
      return;
    }

    this.setState({
      updatingPipeline: true
    });
    updatePipeline()
    .subscribe(() => {
      this.closeModeless();
    }, (err) => {
      console.log(err);
    }, () => {
      this.setState({
        updatingPipeline: false
      });
    });
  };

  render() {
    let actionLabel = this.props.action === runPipeline ? 'Save and Run' : 'Save and Schedule';
    return (
      <ConnectedConfigActionButtons
        updatingPipeline={this.state.updatingPipeline}
        updatingPipelineAndRunOrSchedule={this.state.updatingPipelineAndRunOrSchedule}
        saveAndCloseModeless={this.saveAndCloseModeless}
        saveAndRunOrSchedule={this.saveAndRunOrSchedule}
        activeTab={this.props.activeTab}
        actionLabel={actionLabel}
      />
    );
  }
}
