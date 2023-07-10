import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import submitReducer from "./submitReducer";
import tasksformReducer from "./taskformReducer";
import addTodo from "./addTodoReducer";
const rootReducer = combineReducers({
  tasks: tasksReducer,
  submit: submitReducer,
  tasksform: tasksformReducer,
  addTodo: addTodo,
});

export default rootReducer;
