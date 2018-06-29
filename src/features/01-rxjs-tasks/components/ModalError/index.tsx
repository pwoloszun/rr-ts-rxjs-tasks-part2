import * as React from 'react';
import { interval } from 'rxjs/observable/interval';
import { timer } from 'rxjs/observable/timer';
import {
  retry,
  catchError,
  map,
  take,
} from 'rxjs/operators';

import apiCall from '../../helpers/api-call'
import { fullObserver } from '../../utils';

import './index.css';
import Modal from "./Modal";

interface State {
  isModalVisible: boolean;
  errorMsg: string;
  durationInSec: number;
}

class ModalError extends React.Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      isModalVisible: false,
      durationInSec: 0,
      errorMsg: ''
    };
    this.sendErrorRequest = this.sendErrorRequest.bind(this);
  }

  public render() {
    let modalContent = null;
    const { isModalVisible, errorMsg, durationInSec } = this.state;
    if (isModalVisible) {
      modalContent = (<Modal message={errorMsg} durationInSec={durationInSec}/>);
    }

    return (
      <div className="main-cont">
        <h3>Complex</h3>
        <hr/>
        {modalContent}
        <div>
          <button onClick={this.sendErrorRequest}>Send Error Request</button>
        </div>
      </div>
    );
  }

  private sendErrorRequest() {
    apiCall.error$('/user/data', 'Can\'t find User').pipe(
      retry(2),
      catchError((error) => {
        this.showModal(`Error ${error} occured`, 4);
        return apiCall.success$('/log/error', error);
      }),
    ).subscribe(fullObserver('handleError'));
  }

  private showModal(errorMsg: string, durationInSec: number) {
    this.setState({
      isModalVisible: true,
      errorMsg,
      durationInSec,
    });
    timer(durationInSec * 1000).subscribe(() => {
      this.resetState();
    });
  }

  private resetState() {
    this.setState({
      isModalVisible: false,
      errorMsg: '',
      durationInSec: 0,
    });
  }
}

export default ModalError;
