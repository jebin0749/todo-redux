import { DELETE_TASK, UPDATE_TASK } from "../actions/actionTypes";

const initialState = {
  todo: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TASK:
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id !== action.payload),
      };
      
    case UPDATE_TASK:
      return {
        ...state,
        title:action.payload.title,
        desc:action.payload.desc
      };

    default:
      return state;
  }
};

export default tasksReducer;
