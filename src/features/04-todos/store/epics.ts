import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
  delay,
  map,
  mergeMap
} from 'rxjs/operators'
import {
  // fetchTodosSuccess,
  // removeTodoSuccess,
  TodoAction,
  TodoActionTypes
} from "./actions";
import { Todo } from "./model";

const baseUrl = `http://localhost:4100/api/todos`;

const delayInMs = 1800;

const fetchTodosEpic = (action$: any) => action$.pipe(
  // TODO
  map(() => 'TODO')
);

const removeTodoEpic = (action$: any) => action$.pipe(
  // TODO
  map(() => 'TODO')
);

export {
  fetchTodosEpic,
  removeTodoEpic
}
