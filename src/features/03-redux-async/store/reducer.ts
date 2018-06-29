import { AsyncCounterActions, AsyncCounterActionTypes } from "./actions";

export const featureName = 'asyncCounter';

export interface ApplicationState {
  myCounter: AsyncCounterState; // IMPORTANT: prop name must equal featureName
}

// Feature STATE
export interface AsyncCounterState {
  asyncValue: number;
}

// initial feature state value
const initialState: AsyncCounterState = {
  asyncValue: -7,
};

export default function asyncCounterReducer(state = initialState, action: AsyncCounterActions) {
  switch (action.type) {
    // TODO
    default:
      return state;
  }
}
