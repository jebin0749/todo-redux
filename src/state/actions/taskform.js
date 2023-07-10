import { ADD_TASK } from "./actionTypes";

export const addTask = (title, desc) => {
  return {
    type: ADD_TASK,
    payload: {
      title,
      desc,
    },
  };
};
