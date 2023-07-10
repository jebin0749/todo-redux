import { SUBMIT_FORM } from "./actionTypes";

export const submitForm = (title, desc) => {
  return {
    type: SUBMIT_FORM,
    payload: { title, desc },
  };
};
