import { SetOpenModalType } from "../actions/setOpenModal";

export interface OpenModalTypes {
  isOpen: boolean;
}

const initialState = {
  isOpen: false,
};

const openModal = (state: OpenModalTypes = initialState, action: SetOpenModalType) => {
  switch (action.type) {
    case "SET_OPEN_MODAL":
      return { ...state, isOpen: action.payload };

    default:
      return state;
  }
};

export default openModal;