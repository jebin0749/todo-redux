import { ADD_TASK } from "../actions/actionTypes";

const initialState = {
  todo: [],
};

const tasksformReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };

    default:
      return state;
  }
};

export default tasksformReducer;
