import React from "react"
import { Provider } from "react-redux"
import { store } from "./src/state/store"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    font-weight: 400;   
  }
`

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
      <GlobalStyle />
    </>
  )
}
