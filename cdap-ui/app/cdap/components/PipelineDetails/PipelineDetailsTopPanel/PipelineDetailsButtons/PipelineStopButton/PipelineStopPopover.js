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

import PropTypes from 'prop-types';
import React, {Component} from 'react';
import IconSVG from 'components/IconSVG';
import Popover from 'components/Popover';
import Duration from 'components/Duration';
import moment from 'moment';
import {Observable} from 'rxjs/Observable';
require('./PipelineStopPopover.scss');

export default class PipelineStopPopover extends Component {
  static propTypes = {
    runs: PropTypes.array,
    stopRun: PropTypes.func
  };

  state = {
    runsBeingStopped: [],
    stopAllBtnLoading: false
  };

  stopBtnAndLabel = () => {
    return (
      <div className="btn pipeline-action-btn pipeline-stop-btn">
        <div className="btn-container">
          <IconSVG name="icon-stop" />
          <div className="button-label">
            Stop
          </div>
        </div>
      </div>
    );
  };

  stopAllRuns = () => {
    if (!Array.isArray(this.props.runs) || typeof this.props.stopRun !== 'function') {
      return;
    }

    this.setState({ stopAllBtnLoading: true });
    let stopRunObservables = this.props.runs.map(run => {
      return this.props.stopRun(run.runid);
    });
    Observable.forkJoin(stopRunObservables)
    .subscribe(() => {},
      (err) => {
        console.log(err);
      }, () => {
        this.setState({ stopAllBtnLoading: false });
      });
  };

  stopSingleRun = (runid) => {
    if (this.state.stopAllBtnLoading || this.state.runsBeingStopped.indexOf(runid) !== -1 || typeof this.props.stopRun !== 'function') {
      return;
    }

    this.setState({
      runsBeingStopped: [...this.state.runsBeingStopped, runid]
    });
    this.props.stopRun(runid)
    .subscribe(() => {},
      (err) => {
        console.log(err);
      }, () => {
        this.setState({
          runsBeingStopped: this.state.runsBeingStopped.filter(loadingRunId => loadingRunId !== runid)
        });
      });
  }

  render() {
    return (
      <Popover
        target={this.stopBtnAndLabel}
        className="stop-btn-popover"
        placement="bottom"
        bubbleEvent={false}
        enableInteractionInPopover={true}
      >
        <fieldset disabled={this.state.stopAllBtnLoading}>
          <div className="stop-btn-popover-header">
            <strong>{`Current runs (${this.props.runs.length}`})</strong>
            <button
              className="stop-all-btn"
              onClick={this.stopAllRuns}
            >
              <IconSVG name="icon-stop" />
              <span>Stop All</span>
              {
                this.state.stopAllBtnLoading ?
                  <IconSVG
                    name="icon-spinner"
                    className="fa-spin"
                  />
                :
                  null
              }
            </button>
          </div>
          <table className="stop-btn-popover-table table">
            <thead>
              <tr>
                <th>Start Time</th>
                <th>Duration</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.runs.map((run, i) => {
                  return (
                    <tr key={i}>
                      <td>{moment.unix(run.start).calendar()}</td>
                      <td>
                        <Duration
                          targetTime={run.start}
                          isMillisecond={false}
                          showFullDuration={true}
                        />
                      </td>
                      <td>
                        {
                          this.state.runsBeingStopped.indexOf(run.runid) !== -1 ?
                            <IconSVG
                              name="icon-spinner"
                              className="fa-spin"
                            />
                          :
                            (
                              <a onClick={this.stopSingleRun.bind(this, run.runid)}>
                                Stop run
                              </a>
                            )
                        }
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </fieldset>
      </Popover>
    );
  }
}

PipelineStopPopover.propTypes = {
  runs: PropTypes.array,
  stopRun: PropTypes.func
};
