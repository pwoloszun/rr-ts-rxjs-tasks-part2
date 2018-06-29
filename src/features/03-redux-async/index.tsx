import * as React from 'react';

import AsyncCounter from "./containers/AsyncCounter";

class ReduxAsync extends React.Component {
  public render() {
    return (
      <div>
        <h3>ReduxAsync</h3>
        <AsyncCounter/>
      </div>
    );
  }
}

export default ReduxAsync;
