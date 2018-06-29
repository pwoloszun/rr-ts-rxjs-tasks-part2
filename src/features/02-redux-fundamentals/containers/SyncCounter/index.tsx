import * as React from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from "../../store/reducer";
import Counter from "../../components/Counter";
import {
  // decrementAction,
  // incrementAction,
  // resetAction
} from "../../store/actions";
import {
  selectCounterValue,
  // selectSquareValue
} from "../../store/selectors";

const mapStateToProps = (state: ApplicationState) => {
  return {
    // TODO
  }
};

const mapDispatchToProps = function (dispatch: any) {
  return {
    // TODO
  }
};

const SyncCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default SyncCounter;
