export type SetOpenBrowserType = { type: "SET_OPEN_BROWSER"; payload: boolean }

export const setOpenBrowser = (isOpen: boolean): SetOpenBrowserType => {
  return {
    type: "SET_OPEN_BROWSER",
    payload: isOpen,
  }
}
