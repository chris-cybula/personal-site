import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Dock from "../components/Dock"
import Browser from "../components/Browser"
import Modal from "../components/Modal"
import styled from "styled-components"
import img from "../images/bg.jpg"
import { useSelector } from "react-redux";

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

const Restart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #4caf50;
  fill: white;
  border-radius: 0.4rem;
  margin: 5px 0 5px 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  transition: opacity 0.15s ease-in-out;

  &.is-active {
    opacity: 1;
    transition: opacity 0.15s ease-in-out;
    transition-delay: 5.1s;
  }
`

const IndexPage = () => {
  const state = useSelector(state => state["openBackground"])

  const handleRestart = () => {
    window.location.reload()
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Container className={`${state.isOpen === false && "is-hidden"}`}>
        <Dock />
      </Container>
      <Browser />
      <Modal />
      <Restart className={(state.isOpen === true ? "" : "is-active")} onClick={handleRestart}>
        <svg
          id="Layer_1"
          enableBackground="new 0 0 512 512"
          height="21"
          viewBox="0 0 14.155 14.155"
          width="21"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
        >
          <g>
            <path fill="white" d="M12.083,1.887c-0.795-0.794-1.73-1.359-2.727-1.697v2.135c0.48,0.239,0.935,0.55,1.334,0.95 c1.993,1.994,1.993,5.236,0,7.229c-1.993,1.99-5.233,1.99-7.229,0c-1.991-1.995-1.991-5.235,0-7.229 C3.466,3.269,3.482,3.259,3.489,3.25h0.002l1.181,1.179L4.665,0.685L0.923,0.68l1.176,1.176C2.092,1.868,2.081,1.88,2.072,1.887 c-2.763,2.762-2.763,7.243,0,10.005c2.767,2.765,7.245,2.765,10.011,0C14.844,9.13,14.847,4.649,12.083,1.887z" />
          </g>
        </svg>
      </Restart>
    </Layout>
  )
}

export default IndexPage
