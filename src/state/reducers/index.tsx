import { combineReducers } from "redux";
import openBrowser from "./openBrowser";
import openModal from "./openModal";
import openDock from "./openDock";
import openBackground from "./openBackground";

const allReducers = combineReducers({
    openBrowser,
    openModal,
    openDock,
    openBackground
});

export default allReducers;