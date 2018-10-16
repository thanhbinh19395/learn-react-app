import React, { PureComponent } from "react";
import TodoItemView from "./todolist/TodoItem.view";

class TodoListContainer extends PureComponent {
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo, index) => (
          <TodoItemView key={index} todo={todo} />
        ))}
      </ul>
    );
  }
}

export default TodoListContainer;
