import { ActionTypes } from "../constants/ActionTypes";

export const setEmail = (emailVal) => {
  return {
    type: ActionTypes.ADD_EMAIL,
    payload: emailVal,
  };
};
