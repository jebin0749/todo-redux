import {
  ADD_TODO,
  RESET_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from "../actions/actionTypes";

const initialState = {
  todo: [],
  updated: false,
};

//consider this as task state todo
const addTodo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { title, desc, isDone} = action.payload;
      
      const newTodo = {
        title,
        desc,
        isDone,
        id: state.todo.length + 1,
      };
      return {
        ...state,
        todo: [...state.todo, newTodo],
      };

    case UPDATE_TASK:
      const updatedData = action.payload;
      console.log(updatedData);
      console.log(state.todo);
      state.todo.map((item) => {
        if (updatedData.id === item.id) {
          item.desc = updatedData.desc;
          item.title = updatedData.title;
          item.isDone = updatedData.isDone;
          return item;
        }
        return item;
      });
      // console.log(updatedTask);

      return {
        ...state,
        updated: true,
      };
    case DELETE_TASK:
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id !== action.payload),
      };
    case RESET_TASK:
      return {
        ...state,
        updated: false,
      };
    default:
      return state;
  }
};

export default addTodo;
