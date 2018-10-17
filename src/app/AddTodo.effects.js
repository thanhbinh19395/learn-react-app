import { addTodo, testSideEffect } from "./AddTodo.actions";
import { filter, mapTo } from "rxjs/operators";

const addTodoEffect = action$ =>
  action$.pipe(
    filter(action => {
      console.log(addTodo.toString());
      return action.type === addTodo.toString();
    }),
    mapTo(testSideEffect())
  );

export { addTodoEffect };
