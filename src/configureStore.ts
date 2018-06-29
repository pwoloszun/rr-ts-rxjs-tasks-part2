import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './store/reducer';
import rootEpic from './store/epic';

const initialState = {};
​
export default function configureStore() {
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [epicMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
​
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
​
  const store = createStore(rootReducer, initialState as any, composedEnhancers);

  epicMiddleware.run(rootEpic);

  return store;
}
