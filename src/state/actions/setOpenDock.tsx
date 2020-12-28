export type SetOpenDockType = { type: "SET_OPEN_DOCK"; payload: boolean }

export const setOpenDock = (isOpen: boolean): SetOpenDockType => {
  return {
    type: "SET_OPEN_DOCK",
    payload: isOpen,
  }
}
