import { combineReducers } from "redux";
import openBrowser from "./openBrowser";
import openModal from "./openModal";
import openDock from "./openDock";

const allReducers = combineReducers({
    openBrowser,
    openModal,
    openDock
});

export default allReducers;