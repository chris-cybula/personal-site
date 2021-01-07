import React, { useState } from "react"
import styled from "styled-components"
import { applyStyleModifiers } from "styled-components-modifiers"
import { useDispatch, useSelector } from "react-redux"
import { setOpenBrowser } from "../state/actions/setOpenBrowser";

const MODIFIER_CONFIG = {
  close: () => `
      background-color: #FF5452;
      border: 1px solid #FF5452;
  `,
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 2;
  margin-top: -100vh;
  transition: opacity 0.15s ease-in-out;
  cursor: default;

  &.is-closed {
    opacity: 0;
    transition: opacity 0.15s ease-in-out;
    pointer-events: none;
  }
`

const MockupWrapper = styled.div`
  position: absolute;
`

const MockupBar = styled.div`
  background-color: gray;
  padding: 8px 0;
  display: flex;
  align-items: center;
  border-radius: 0.4rem 0.4rem 0 0;
  background-color: rgba(230, 230, 230, 0.9);
`

const MockupInput = styled.div`
  width: calc(100% - 6em);
  height: 1.2em;
  border-radius: 20px;
  background-color: white;
  margin-right: 20px;
  padding: 2px 0 2px 10px;
  font-family: Lato;
  cursor: default;
  line-height: 1.1;
`

const MockupButtons = styled.div`
  height: 15px;
  display: flex;
  margin: 0 15px;
`

const MockupButton = styled.div`
  width: 13px;
  height: 13px;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 0 5px;
  position: relative;
  z-index: 200;
  pointer-events: none;
  
  &.is-open {
    pointer-events: auto;
    cursor: pointer;
  }
  
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

const MockupContent = styled.div`
  height: 70vh;
  width: calc(100vw - 20px);
  background-color: #252839;
  color: white;
  border-radius: 0 0 0.4rem 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 788px) {
    width: 768px;
  }

  @media (min-width: 576px) { 
    height: 450px;
  }
`

const Heading = styled.h1`
  margin: 0 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  
  &.is-open {
    animation-name: fadeInBottom;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-delay: .15s;

    @keyframes fadeInBottom {
      from {
        opacity: 0;
        transform: translateY(100%);
      }
      to { 
        opacity: 1;
      }
    }
  }  

  @media (max-width: 500px) {
    font-size: 1.8rem;
  }
`

const SubHeading = styled.h2`
  margin: 0 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  color: #ced8de;

  &.is-open {
    animation-name: fadeInBottom;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-delay: .65s;

    @keyframes fadeInBottom {
      from {
        opacity: 0;
        transform: translateY(100%);
      }
      to { 
        opacity: 1 
      }
    }
  } 

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`

const Name = styled.span`
  text-transform: uppercase;
  color: #f1b631;
`

const Browser = () => {
  const refContainer = React.useRef()
  const refMockupWrapper = React.useRef()
  const dispatch = useDispatch();
  const state = useSelector(state => state["openBrowser"])
  const modal = useSelector(state => state["openModal"])
  const dock = useSelector(state => state["openDock"])

  const [dist, setDist] = useState({
    distX: 0,
    distY: 0,
  })

  const handleMouseDown = e => {
    e.preventDefault()

    setDist({
      distX: Math.abs(refMockupWrapper.current.offsetLeft - e.clientX),
      distY: Math.abs(refMockupWrapper.current.offsetTop - e.clientY),
    })

    refMockupWrapper.current.style.pointerEvents = "none"
  }

  const handleMouseMove = e => {
    if (refMockupWrapper.current.style.pointerEvents === "none") {
      refMockupWrapper.current.style.left = `${e.clientX - dist.distX}px`
      refMockupWrapper.current.style.top = `${e.clientY - dist.distY}px`
    }
  }

  const handleMouseUp = e => {
    refMockupWrapper.current.style.pointerEvents = "initial"
  }

  const closeBrowser = e => {
    dispatch(setOpenBrowser(false));
  }

  return (
    <>
      <Container
        className={(state.isOpen === true ? "" : "is-closed") || (modal.isOpen === true && "is-closed") || (dock.isOpen === false && "is-closed")}
        ref={refContainer}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <MockupWrapper ref={refMockupWrapper} onMouseDown={handleMouseDown}>
          <MockupBar>
            <MockupButtons>
              <MockupButton modifiers={"close"} className={state.isOpen === true ? "is-open" : ""} onClick={closeBrowser}></MockupButton>
              <MockupButton></MockupButton>
              <MockupButton></MockupButton>
            </MockupButtons>
            <MockupInput>chris-cybula.dev</MockupInput>
          </MockupBar>
          <MockupContent>
            <Heading className={state.isOpen === true ? "is-open" : ""}>My name is <Name>Chris</Name>.</Heading>
            <SubHeading className={state.isOpen === true ? "is-open" : ""}>I build things for the web.</SubHeading>
          </MockupContent>
        </MockupWrapper>
      </Container>
    </>
  )
}

export default Browser
