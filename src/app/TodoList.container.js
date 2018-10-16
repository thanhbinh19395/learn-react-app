import React, { PureComponent } from "react";
import TodoListView from "./TodoList.view";
import { connect } from "react-redux";

class TodoListContainer extends PureComponent {
  render() {
    return <TodoListView todos={this.props.todos} />;
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  null
)(TodoListContainer);
