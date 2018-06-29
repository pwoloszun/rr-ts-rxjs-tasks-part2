import { Action } from '../../../store/action';
import { CounterState } from "./reducer";

export enum CounterActionTypes {
  INCREMENT = 'basics/counter/Increment',
  DECREMENT = 'basics/counter/Decrement',
  RESET = 'basics/counter/Reset'
}

interface IncrementAction extends Action {
  type: CounterActionTypes.INCREMENT;
  payload: CounterState;
}

export function incrementAction(value: number): IncrementAction {
  return {} as IncrementAction; // TODO
}

interface DecrementAction extends Action {
  type: CounterActionTypes.DECREMENT;
  payload: number;
}

// TODO decrementAction(payload: number): DecrementAction {

interface ResetAction extends Action {
  type: CounterActionTypes.RESET;
}

// TODO resetAction(): ResetAction {

export type CounterActions
  = IncrementAction
  | DecrementAction
  | ResetAction;
