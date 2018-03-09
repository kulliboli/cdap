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

import React from 'react';
import PropTypes from 'prop-types';
import IconSVG from 'components/IconSVG';
import {reverseArrayWithoutMutating} from 'services/helpers';
import findIndex from 'lodash/findIndex';
import {setCurrentRunId} from 'components/PipelineDetails/store/ActionCreator';

export default function CurrentRunIndex({runs, currentRun}) {
  let reversedRuns = reverseArrayWithoutMutating(runs);
  let currentRunIndex = findIndex(reversedRuns, {runid: currentRun.runid});

  if (!reversedRuns || currentRunIndex === -1) {
    return (
      <div className="run-number-container">
        <h4>No Runs</h4>
      </div>
    );
  }

  let previousRunId, nextRunId;
  if (currentRunIndex > 0) {
    previousRunId = reversedRuns[currentRunIndex-1].runid;
  }
  if (currentRunIndex < reversedRuns.length - 1) {
    nextRunId =  reversedRuns[currentRunIndex+1].runid;
  }

  return (
    <div className="run-number-container">
      <h4 className="run-number">
        {`Run ${currentRunIndex + 1} of ${runs.length}`}
      </h4>
      <div className="run-number-switches">
        <button
          disabled={!previousRunId}
          onClick={setCurrentRunId.bind(null, previousRunId)}
        >
          <IconSVG name="icon-caret-left" />
        </button>
        <button
          disabled={!nextRunId}
          onClick={setCurrentRunId.bind(null, nextRunId)}
        >
          <IconSVG name="icon-caret-right" />
        </button>
      </div>
    </div>
  );
}

CurrentRunIndex.propTypes = {
  runs: PropTypes.array,
  currentRun: PropTypes.object
};
