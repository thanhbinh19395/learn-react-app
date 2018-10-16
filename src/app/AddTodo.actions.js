import { createActions } from "redux-actions";

const { addTodo } = createActions({
  ADD_TODO: todo => ({ todo })
});

export { addTodo };
