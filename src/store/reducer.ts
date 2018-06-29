import { combineReducers } from 'redux';

import counterReducer, { featureName as counterFeatureName } from '../features/02-redux-fundamentals/store/reducer';
import asyncCounterReducer, { featureName as asyncCounterFeatureName } from '../features/03-redux-async/store/reducer';
import todosReducer, { featureName as todosFeatureName } from '../features/04-todos/store/reducer';

const rootReducer = combineReducers({
  [counterFeatureName]: counterReducer,
  [asyncCounterFeatureName]: asyncCounterReducer,
  [todosFeatureName]: todosReducer,
});

export default rootReducer;
