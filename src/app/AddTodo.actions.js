import { createActions } from "redux-actions";

const { addTodo, testSideEffect } = createActions({
  ADD_TODO: todo => ({ todo }),
  TEST_SIDE_EFFECT: () => ({ sideEffect: true })
});

export { addTodo, testSideEffect };
