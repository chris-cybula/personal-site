import { SetOpenBrowserType } from "../actions/setOpenBrowser";

export interface StateTypes {
  isOpen: boolean;
}

const initialState = {
  isOpen: false,
};

const openBrowser = (state: StateTypes = initialState, action: SetOpenBrowserType) => {
  switch (action.type) {
    case "SET_OPEN_BROWSER":
      return { ...state, isOpen: action.payload };

    default:
      return state;
  }
};

export default openBrowser;