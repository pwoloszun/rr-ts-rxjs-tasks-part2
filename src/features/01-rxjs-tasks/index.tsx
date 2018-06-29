import * as React from 'react';

import './index.css';
import AutoComplete from "./components/AutoComplete";
import ModalError from "./components/ModalError";
import SimpleForm from "./components/SimpleForm";
import StreamExample from "./components/StreamExample";

class RxjsTasks extends React.Component {
  public render() {
    return (
      <div>
        <h3>RxJS tasks</h3>

        <div className="task-cont">
          <StreamExample/>
        </div>

        <div className="task-cont">
          <AutoComplete/>
        </div>

        <div className="task-cont">
          <ModalError/>
        </div>

        <div className="task-cont">
          <SimpleForm/>
        </div>

      </div>
    );
  }
}

export default RxjsTasks;
