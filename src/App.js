import React, { Component } from "react";
import "./App.css";

import AddTodo from "./app/AddTodo.container";
import TodoList from "./app/TodoList.container";
class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
