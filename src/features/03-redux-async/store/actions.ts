import { Action } from '../../../store/action';
import { AsyncCounterState } from "./reducer";

export enum AsyncCounterActionTypes {
  INCREMENT_REQUEST = 'async/counter/IncrementRequest',
  INCREMENT_SUCCESS = 'async/counter/IncrementSuccess',
  DECREMENT_REQUEST = 'async/counter/DecrementRequest',
  DECREMENT_SUCCESS = 'async/counter/DecrementSuccess'
}

interface AsyncIncrementRequestAction extends Action {
  type: AsyncCounterActionTypes.INCREMENT_REQUEST;
}

export function incrementRequestAction(): AsyncIncrementRequestAction {
  return {} as AsyncIncrementRequestAction; // TODO
}

interface AsyncIncrementAction extends Action {
  type: AsyncCounterActionTypes.INCREMENT_SUCCESS;
  payload: AsyncCounterState;
}

// TODO incrementAction(asyncValue: number): AsyncIncrementAction

interface AsyncDecrementRequestAction extends Action {
  type: AsyncCounterActionTypes.DECREMENT_REQUEST;
}

// TODO decrementRequestAction(): AsyncDecrementRequestAction {

interface AsyncDecrementAction extends Action {
  type: AsyncCounterActionTypes.DECREMENT_SUCCESS;
  payload: number;
}

// TODO decrementAction(payload: number): AsyncDecrementAction {

export type AsyncCounterActions
  = AsyncIncrementRequestAction
  | AsyncIncrementAction
  | AsyncDecrementRequestAction
  | AsyncDecrementAction;
