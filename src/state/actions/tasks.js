import { DELETE_TASK, UPDATE_TASK } from "./actionTypes";

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};

export const updateTask = (title, desc) => {
  return {
    type: UPDATE_TASK,
    payload: { title, desc},
  };
};
