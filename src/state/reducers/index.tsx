import { combineReducers } from "redux";
import openBrowser from "./openBrowser";
import openModal from "./openModal";

const allReducers = combineReducers({
    openBrowser,
    openModal
});

export default allReducers;