import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { applyStyleModifiers } from "styled-components-modifiers"
import { OpenBrowserTypes } from "../state/reducers/openBrowser"
import { useDispatch, useSelector } from "react-redux"
import { setOpenModal } from "../state/actions/setOpenModal";

const MODIFIER_CONFIG = {
  close: () => `
      background-color: #FF5452;
      border: 1px solid #FF5452;
      cursor: pointer;
      pointer-events: initial;
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

  &.is-closed {
    display: none;
  }
`

const MockupWrapper = styled.div`
  /* border-top: 2em solid rgba(230, 230, 230, 0.7);
  box-shadow: 0 0.1em 1em 0 rgba(0, 0, 0, 0.4); */
  position: absolute;
  /* border-radius: 0.4rem 0.4rem 0 0;
  width: 800px;
  margin: 0; */

  /* &:before {
    display: block;
    position: absolute;
    content: "";
    top: -1.25em;
    left: 1em;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background-color: #f44;
    box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
  } */

  /* &:after {
    display: block;
    position: absolute;
    content: "";
    top: -1.6em;
    left: 5.5em;
    width: calc(100% - 6em);
    height: 1.2em;
    border-radius: 2px;
    background-color: white;
  } */
`

const MockupContent = styled.div`
  height: 70vh;
  width: 100vw;
  background-color: white;
  border-radius: 0 0 0.4rem 0.4rem;
  background-color: rgba(230, 230, 230, 1);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 450px;
  }

  @media (min-width: 576px) { 
    height: 200px;
  }
`

const MockupBar = styled.div`
  padding: 8px 0;
  display: flex;
  align-items: center;
  border-radius: 0.4rem 0.4rem 0 0;
  background-color: rgba(230, 230, 230, 0.9);
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
  
  ${applyStyleModifiers(MODIFIER_CONFIG)};
`

const Heading = styled.h1`
  margin-top: 0;
  padding-top: 8px;
  padding-left: 8px;
`

const SubHeading = styled.h2`
  padding-left: 8px;
`

const Image = styled.img`
  padding-left: 8px;
`

const Browser = () => {
  const refContainer = React.useRef()
  const refMockupWrapper = React.useRef()
  const dispatch = useDispatch();

  // const state = useSelector((state: StateTypes) => state["openBrowser"]);
  const state = useSelector(state => state["openModal"])

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

    console.log(dist)
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
    dispatch(setOpenModal(false));

    console.log('Chris')
  }

  return (
    <>
      <Container
        className={state.isOpen === true ? "" : "is-closed"}
        ref={refContainer}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <MockupWrapper ref={refMockupWrapper} onMouseDown={handleMouseDown}>

          <MockupBar>
            <MockupButtons>
              <MockupButton modifiers={"close"} onClick={ closeBrowser }></MockupButton>
              <MockupButton></MockupButton>
              <MockupButton></MockupButton>
            </MockupButtons>
          </MockupBar>

          <MockupContent>
            <p>Site has been successfully deleted.</p>
          </MockupContent>
        </MockupWrapper>
      </Container>
    </>
  )
}

export default Browser
