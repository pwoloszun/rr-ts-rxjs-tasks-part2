import { CounterActions, CounterActionTypes } from "./actions";

export const featureName = 'syncCounter';

export interface ApplicationState {
  myCounter: CounterState; // IMPORTANT: prop name must equal featureName
}

// Feature STATE
export interface CounterState {
  value: number;
  updatedAt: number | null;
}

// initial feature state value
const initialState: CounterState = {
  value: 0,
  updatedAt: null
};

export default function counterReducer(state = initialState, action: CounterActions) {
  switch (action.type) {
    // TODO
    default:
      return state;
  }
}
