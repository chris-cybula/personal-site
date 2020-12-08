import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { applyStyleModifiers } from "styled-components-modifiers"

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 2;
`

const MockupWrapper = styled.div`
  border-top: 2em solid rgba(230, 230, 230, 0.7);
  box-shadow: 0 0.1em 1em 0 rgba(0, 0, 0, 0.4);
  position: absolute;
  border-radius: 3px 3px 0 0;
  width: 500px;
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
  height: 200px;
  width: 500px;
  background-color: gray;
  border-radius: 0 0 3px 3px;
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
          <MockupContent></MockupContent>
        </MockupWrapper>
      </Container>
    </>
  )
}

export default Browser
