import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { applyStyleModifiers } from "styled-components-modifiers"

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  position: relative;
  z-index: 2;
`

const MockupWrapper = styled.div`
  border-top: 2em solid rgba(230, 230, 230, 0.7);
  box-shadow: 0 0.1em 1em 0 rgba(0, 0, 0, 0.4);
  position: relative;
  border-radius: 3px 3px 0 0;
  width: 500px;
  margin: 0 auto;

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
  const handleMouseDown = () => {
    console.log("onDown")
  }

  const handleMouseMove = () => {
    console.log("onMove")
  }

  const handleMouseUp = () => {
    console.log("onUp")
  }

  return (
    <>
      <Container onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
        <MockupWrapper onMouseDown={handleMouseDown}>
          <MockupContent></MockupContent>
        </MockupWrapper>
      </Container>
    </>
  )
}

export default Browser
