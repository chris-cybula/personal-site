import React from "react"
import Layout from "../components/layout"
import SEO from "../components/Seo"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>404</h1>
    </Container>
  </Layout>
)

export default NotFoundPage
