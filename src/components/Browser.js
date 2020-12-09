import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { applyStyleModifiers } from "styled-components-modifiers"

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 2;
  margin-top: -100vh;
`

const MockupWrapper = styled.div`
  border-top: 2em solid rgba(230, 230, 230, 0.7);
  box-shadow: 0 0.1em 1em 0 rgba(0, 0, 0, 0.4);
  position: absolute;
  border-radius: 0.4rem 0.4rem 0 0;
  width: 800px;
  margin: 0;

  &:before {
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
  }

  &:after {
    display: block;
    position: absolute;
    content: "";
    top: -1.6em;
    left: 5.5em;
    width: calc(100% - 6em);
    height: 1.2em;
    border-radius: 2px;
    background-color: white;
  }
`

const MockupContent = styled.div`
  height: 450px;
  width: 800px;
  background-color: white;
  border-radius: 0 0 0.4rem 0.4rem;
  /* padding-left: 8px; */
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
  const refContainer = React.useRef();
  const refMockupWrapper = React.useRef();

  const [dist, setDist] = useState({
    distX: 0,
    distY: 0
  })

  const handleMouseDown = (e) => {
    e.preventDefault();

    setDist({ 
      distX: Math.abs(refMockupWrapper.current.offsetLeft - e.clientX),
      distY: Math.abs(refMockupWrapper.current.offsetTop - e.clientY)
     })

     refMockupWrapper.current.style.pointerEvents = 'none';

    console.log(dist)
  }

  const handleMouseMove = (e) => {
    if(refMockupWrapper.current.style.pointerEvents === 'none') {
      refMockupWrapper.current.style.left = `${e.clientX - dist.distX}px`;
      refMockupWrapper.current.style.top = `${e.clientY - dist.distY}px`;
    } 
  }

  const handleMouseUp = (e) => {
    refMockupWrapper.current.style.pointerEvents = 'initial';
  }

  return (
    <>
      <Container ref={refContainer} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <MockupWrapper ref={refMockupWrapper} onMouseDown={handleMouseDown}>
          <MockupContent>
            <Heading>My name is Chris.</Heading>
            <SubHeading>I love building things for the web.</SubHeading>
            <Image src="https://cdn.glitch.com/78a63c0e-9d0d-41d5-84ad-1c4a47e813e0%2Fwindows_9x_user.gif?v=1576535359941"></Image>
            {/* <Image src="https://cdn.glitch.com/78a63c0e-9d0d-41d5-84ad-1c4a47e813e0%2Fearth.gif?v=1576535366267"></Image> */}
          </MockupContent>
        </MockupWrapper>
      </Container>
    </>
  )
}

export default Browser
