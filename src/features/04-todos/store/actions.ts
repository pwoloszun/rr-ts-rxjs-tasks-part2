import { Action } from '../../../store/action';
import { Todo } from "./model";

export enum TodoActionTypes {
  FETCH_REQUEST = 'todos/FetchRequest',
  FETCH_SUCCESS = 'todos/FetchSuccess',
  REMOVE_REQUEST = 'todos/RemoveRequest',
  REMOVE_SUCCESS = 'todos/RemoveSuccess'
}

interface FetchTodosRequest extends Action {
  type: TodoActionTypes.FETCH_REQUEST;
}

// TODO fetchTodosRequest(): FetchTodosRequest

interface FetchTodosSuccess extends Action {
  type: TodoActionTypes.FETCH_SUCCESS;
  payload: Todo[];
}

// TODO fetchTodosSuccess(todos: Todo[]): FetchTodosSuccess

interface RemoveTodoRequest extends Action {
  type: TodoActionTypes.REMOVE_REQUEST;
  payload: number;
}

// TODO removeTodoRequest(payload: number): RemoveTodoRequest

interface RemoveTodoSuccess extends Action {
  type: TodoActionTypes.REMOVE_SUCCESS;
  payload: number;
}

// TODO removeTodoSuccess(deletedId: number): RemoveTodoSuccess

export type TodoAction
  = FetchTodosRequest
  | FetchTodosSuccess
  | RemoveTodoRequest
  | RemoveTodoSuccess;
