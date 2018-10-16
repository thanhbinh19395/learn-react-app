import React, { PureComponent } from "react";

class TodoItemView extends PureComponent {
  render() {
    return <li>{this.props.todo}</li>;
  }
}

export default TodoItemView;
