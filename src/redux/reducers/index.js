import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  email: "",
};

export const emailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_EMAIL:
      return { ...state, email: payload };
    default:
      return state;
  }
};
