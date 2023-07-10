import { ADD_TODO } from "../actions/actionTypes";

const initialState = {
  todo: [],
};

const addTodo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      
      const { title, desc } = action.payload;
      
      const newTodo = {
        title,
        desc,
        id: state.todo.length + 1,
      };
      return {
        
        ...state,
        todo: [...state.todo, newTodo],
      };
    default:
      return state;
  }
};

export default addTodo;
