import { SetOpenDockType } from "../actions/setOpenDock";

export interface OpenDockTypes {
  isOpen: boolean;
}

const initialState = {
  isOpen: false,
};

const openDock = (state: OpenDockTypes = initialState, action: SetOpenDockType) => {
  switch (action.type) {
    case "SET_OPEN_DOCK":
      return { ...state, isOpen: action.payload };

    default:
      return state;
  }
};

export default openDock;