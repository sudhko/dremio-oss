/*
 * Copyright (C) 2017-2018 Dremio Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { getEntity, getViewState } from 'selectors/resources';
import { VIEW_ID } from 'pages/HomePage/components/modals/SpaceModal';

export const mapStateToProps = (state, props) => {
  const entity = getEntity(state, props.entityId, 'space');
  return {
    entity,
    viewState: getViewState(state, VIEW_ID)
  };
};

export default function(input) {
  Object.assign(input.prototype, { // eslint-disable-line no-restricted-properties
    mutateFormValues(formValues) {
      delete formValues.accelerationRefreshPeriod;
      delete formValues.accelerationGracePeriod;
    }
  });
}
