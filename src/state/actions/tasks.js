import { DELETE_TASK, UPDATE_TASK, RESET_TASK } from "./actionTypes";

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};

export const updateTask = (title, desc, isDone, id) => {
  return {
    type: UPDATE_TASK,
    payload: { title, desc, isDone, id},
  };
};

export const resetTaskState = () => {
  return {
    type: RESET_TASK
  };
};