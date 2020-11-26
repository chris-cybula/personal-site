import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <h1>Chris</h1>
    </Container>
  </Layout>
)

export default IndexPage
