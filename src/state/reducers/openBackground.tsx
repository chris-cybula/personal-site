import { SetOpenBackgroundType } from "../actions/setOpenBackground";

export interface OpenBackgroundTypes {
  isOpen: boolean;
}

const initialState = {
  isOpen: true,
};

const openBackground = (state: OpenBackgroundTypes = initialState, action: SetOpenBackgroundType) => {
  switch (action.type) {
    case "SET_OPEN_BACKGROUND":
      return { ...state, isOpen: action.payload };

    default:
      return state;
  }
};

export default openBackground;