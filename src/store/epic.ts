import { combineEpics } from 'redux-observable';

import { asyncDecrementEpic, asyncIncrementEpic } from "../features/03-redux-async/store/epics";
import { fetchTodosEpic, removeTodoEpic } from "../features/04-todos/store/epics";

const rootEpic = combineEpics(
  asyncIncrementEpic,
  asyncDecrementEpic,
  fetchTodosEpic,
  removeTodoEpic
);

export default rootEpic;
