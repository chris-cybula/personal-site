export type SetOpenModalType = { type: "SET_OPEN_MODAL"; payload: boolean }

export const setOpenModal = (isOpen: boolean): SetOpenModalType => {
  return {
    type: "SET_OPEN_MODAL",
    payload: isOpen,
  }
}
