export type SetOpenBackgroundType = { type: "SET_OPEN_BACKGROUND"; payload: boolean }

export const setOpenBackground = (isOpen: boolean): SetOpenBackgroundType => {
  return {
    type: "SET_OPEN_BACKGROUND",
    payload: isOpen,
  }
}
