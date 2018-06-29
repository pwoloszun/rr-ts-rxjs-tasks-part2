import * as React from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from "../../store/reducer";
import Counter from "../../components/Counter";
import {
  // decrementRequestAction,
  // incrementRequestAction,
} from "../../store/actions";
import { selectAsyncCounterValue } from "../../store/selectors";

const mapStateToProps = (state: ApplicationState) => {
  return {
    value: 997 // TODO
  }
};

const mapDispatchToProps = function (dispatch: any) {
  return {
    onIncrement() {
      console.log('onIncrement TODO'); // TODO
    },
    // TODO onDecrement
  }
};

const AsyncCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default AsyncCounter;
