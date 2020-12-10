import { createStore } from "redux";
import allReducers from "./reducers";

export let store = createStore(
  allReducers,

  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);