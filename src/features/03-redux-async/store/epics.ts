import { ofType } from 'redux-observable';
import {
  delay,
  mapTo,
  map
} from 'rxjs/operators'
import {
  AsyncCounterActionTypes,
  // decrementAction,
  // incrementAction
} from "./actions";


const asyncIncrementEpic = (action$: any) => action$.pipe(
  map(() => 12) // TODO
);

const asyncDecrementEpic = (action$: any) => action$.pipe(
  map(() => 12) // TODO
);

export {
  asyncIncrementEpic,
  asyncDecrementEpic
}
