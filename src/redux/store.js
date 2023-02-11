import { createStore } from "redux";
import { emailReducer } from "./reducers";

export const store = createStore(
  emailReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

