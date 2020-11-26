import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { keyframes } from "styled-components"
import img from "../images/bg.jpg"

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  
  &::before {
    content: '';
    display: block;
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
    background-color: black;
    animation: fadeInAnimation ease 3s; 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards; 
  }

  @keyframes fadeInAnimation { 
    0% { 
        opacity: 1; 
    } 
    100% { 
        opacity: 0; 
     } 
} 
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container></Container>
  </Layout>
)

export default IndexPage
