import { combineReducers } from "redux";
import openBrowser from "./openBrowser";

const allReducers = combineReducers({
    openBrowser,
});

export default allReducers;