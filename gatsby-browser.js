import React from "react"
import { Provider } from "react-redux"
import { store } from "./src/state/store"
import { Helmet } from "react-helmet"

export const wrapRootElement = ({ element }) => {
  return (
    <>
    <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Provider store={store}>{element}</Provider>
    </>
  )
}
