import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import img from '../images/bg.jpg';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${img});
	  background-position: center;
	  background-size: cover;
	  background-repeat: no-repeat;
	  z-index: 1;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      
    </Container>
  </Layout>
)

export default IndexPage
