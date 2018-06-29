import * as React from 'react';
import { interval } from 'rxjs/observable/interval';
import {
  map,
  take,
} from 'rxjs/operators';

import './Modal.css';

interface Props {
  message: string;
  durationInSec: number;
}

interface State {
  message: string;
}

class Modal extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    const { message, durationInSec } = props;
    this.state = {
      message
    };

    const component = this;
    interval(1000).pipe(
      take(durationInSec),
      map((i) => `${message}, (${durationInSec - i - 1})`)
    ).subscribe({
      next(message) {
        component.setState({ message });
      },
      complete() {
        component.setState({ message: '' });
      }
    });
  }

  public render() {
    const { message } = this.state;
    return (
      <div className="modal">
        {message}
      </div>
    );
  }

}

export default Modal;
