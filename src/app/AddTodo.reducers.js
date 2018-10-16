import { handleActions } from "redux-actions";
import { addTodo } from "./AddTodo.actions";

const todos = handleActions(
  {
    [addTodo]: (state, { payload: { todo } }) => [...state, todo]
  },
  []
);

export default todos;
