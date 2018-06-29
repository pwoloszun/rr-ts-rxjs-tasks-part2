import { TodoAction, TodoActionTypes } from "./actions";
import { Todo } from "./model";

export const featureName = 'todos';

export interface ApplicationState {
  todos: TodosState; // IMPORTANT: prop name must equal featureName
}

// Feature STATE
export interface TodosState {
  todos: Todo[];
  isFetching: boolean;
}

// initial feature state value
const initialState: TodosState = {
  todos: [],
  isFetching: false
};

export default function todosReducer(state = initialState, action: TodoAction) {
  switch (action.type) {
    // TODO
    default:
      return state;
  }
}
