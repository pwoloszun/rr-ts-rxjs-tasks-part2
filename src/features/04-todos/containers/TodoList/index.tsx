import * as React from 'react';
import { connect } from 'react-redux';

import './index.css';
import { ApplicationState } from "../../store/reducer";
import List from "../../components/List";
import {
  // fetchTodosRequest,
  // removeTodoRequest
} from "../../store/actions";
import {
  selectIsFetching,
  // selectTodos
} from "../../store/selectors";
import { Todo } from "../../store/model";

interface Props {
  todos: Todo[];
  isFetching: boolean;
  fetchTodos: () => void;
  removeTodo: () => void;
}

class TodoList extends React.Component<Props, any> {
  render() {
    // TODO: display fetched todos
    let content = null;
    content = (<cite className="loading">Loading...</cite>);
    return (
      <div className="todo-list-cont">
        <h3>Todo List</h3>
        {content}
      </div>
    );
  }

  componentWillMount() {
    // TODO
  }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
