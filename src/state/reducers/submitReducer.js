import { SUBMIT_FORM } from "../actions/actionTypes";

const initialState = {
  submitted: false,
  title: "",
  desc: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
        ...state,
        submitted: true,
        title: action.payload.title,
        desc: action.payload.desc,
      };
    default:
      return state;
  }
};

export default reducer;
