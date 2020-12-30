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

const Icon = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;

  &.is-active {
    opacity: 1;
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

      <Icon
        className={(state.isOpen === true ? "" : "is-active")}
        id="Layer_1"
        enableBackground="new 0 0 512 512"
        height="21"
        viewBox="0 0 512 512"
        width="21"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
      >
        <g>
          <path d="m302.098 265.672 31.115-77.786c2.286-5.714-3.385-11.385-9.099-9.099l-77.786 31.115c-4.666 1.866-5.903 7.896-2.35 11.449l46.672 46.672c3.553 3.553 9.582 2.315 11.448-2.351z" />
          <path d="m187.886 333.213 77.786-31.115c4.666-1.866 5.904-7.896 2.35-11.449l-46.672-46.672c-3.553-3.553-9.583-2.316-11.449 2.35l-31.115 77.786c-2.285 5.715 3.386 11.386 9.1 9.1z" />
          <path d="m437.02 74.98c-48.353-48.352-112.64-74.98-181.02-74.98s-132.667 26.628-181.02 74.98-74.98 112.64-74.98 181.02 26.628 132.667 74.98 181.02 112.64 74.98 181.02 74.98 132.667-26.628 181.02-74.98 74.98-112.64 74.98-181.02-26.628-132.667-74.98-181.02zm-54.165 74.962-64 160c-1.626 4.065-4.848 7.287-8.913 8.913l-160 64c-1.926.771-3.941 1.145-5.939 1.145-4.167 0-8.258-1.628-11.317-4.687-4.525-4.526-5.919-11.313-3.542-17.256l64-160c1.626-4.065 4.848-7.287 8.913-8.913l160-64c5.944-2.377 12.73-.983 17.256 3.542 4.526 4.526 5.92 11.314 3.542 17.256z" />
        </g>
      </Icon>

    </Layout>
  )
}

export default IndexPage
