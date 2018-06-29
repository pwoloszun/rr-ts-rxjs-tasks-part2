import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import RxjsTasks from "./features/01-rxjs-tasks";
import ReduxFundamentals from "./features/02-redux-fundamentals";
import ReduxAsync from "./features/03-redux-async";
import Todos from "./features/04-todos";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">RxJS tasks</Link></li>
            <li><Link to="/redux-fundamentals">Redux Fundamentals</Link></li>
            <li><Link to="/redux-async">Redux Async</Link></li>
            <li><Link to="/todos">Todos</Link></li>
          </ul>
          <hr/>
          <div className="main-container">
            <Route exact={true} path="/" component={RxjsTasks}/>
            <Route path="/redux-fundamentals" component={ReduxFundamentals}/>
            <Route path="/redux-async" component={ReduxAsync}/>
            <Route path="/todos" component={Todos}/>
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
