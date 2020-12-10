import { SetOpenBrowserType } from "../actions/setOpenBrowser";

export interface OpenBrowserTypes {
  isOpen: boolean;
}

const initialState = {
  isOpen: false,
};

const openBrowser = (state: OpenBrowserTypes = initialState, action: SetOpenBrowserType) => {
  switch (action.type) {
    case "SET_OPEN_BROWSER":
      return { ...state, isOpen: action.payload };

    default:
      return state;
  }
};

export default openBrowser;