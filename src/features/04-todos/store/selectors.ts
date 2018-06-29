import { createSelector } from 'reselect';
import { ApplicationState, TodosState, featureName } from './reducer';

const selectFeature = (state: ApplicationState) => {
  return state[featureName];
};

// TODO: selectTodos selector

export const selectIsFetching = createSelector(
  selectFeature,
  (state: TodosState) => {
    return state.isFetching;
  }
);
