import { combineEpics } from "redux-observable";
import { addTodoEffect } from "./app/AddTodo.effects";

export default combineEpics(addTodoEffect);
