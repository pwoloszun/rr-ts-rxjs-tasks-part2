import { createSelector } from 'reselect';
import { ApplicationState, CounterState, featureName } from './reducer';

export const selectFeature = (state: ApplicationState) => {
  return state[featureName];
};

export const selectCounterValue = () => null; // TODO

// TODO: selectSquareValue
