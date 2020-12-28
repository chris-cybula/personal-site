import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Dock from "../components/Dock"
import Browser from "../components/Browser"
import Modal from "../components/Modal"
import styled from "styled-components"
import img from "../images/bg.jpg"
import { setOpenBackground } from "../state/actions/setOpenBackground";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  max-width: 1600px;
  height: 100vh;
  background-image: url(${img});
  background-position: center;
  background-size: 800px;
  background-repeat: no-repeat;
  z-index: 1;
  margin: 0 auto;

  @media (min-width: 768px) { 
    background-size: cover;
  }
  
  &::before {
    content: '';
    display: block;
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
    background-color: black;
    z-index: -1;
  }

  &::after {
    content: '';
    display: block;
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
    background-color: black;
    animation: fadeInAnimation ease 5s; 
    animation-fill-mode: forwards; 
    animation-delay: 1s;
  }

  @keyframes fadeInAnimation { 
    0% { 
        opacity: 1; 
    } 
    100% { 
        opacity: 0; 
     } 
  } 

  @keyframes fadeOutAnimation { 
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
     } 
  } 

  &.is-hidden {
    &::after {
      animation: fadeOutAnimation ease 5s; 
    }
  }
`

const IndexPage = () => {
  const state = useSelector(state => state["openBackground"])

  return (
    <Layout>
      <SEO title="Home" />
      <Container className={`${state.isOpen === false && "is-hidden"}`}>
        <Dock />
      </Container>
      <Browser />
      <Modal />
    </Layout>
  )
}

export default IndexPage
