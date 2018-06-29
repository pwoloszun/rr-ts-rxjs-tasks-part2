import { createSelector } from 'reselect';
import { ApplicationState, AsyncCounterState, featureName } from './reducer';

const selectFeature = (state: ApplicationState) => {
  return state[featureName];
};

// TODO selectAsyncCounterValue

export const selectAsyncCounterValue = () => null;
