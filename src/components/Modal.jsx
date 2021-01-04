import React, { useState } from "react"
import styled from "styled-components"
import { applyStyleModifiers } from "styled-components-modifiers"
import { useDispatch, useSelector } from "react-redux"
import { setOpenModal } from "../state/actions/setOpenModal"
import { setOpenDock } from "../state/actions/setOpenDock"
import { setOpenBackground } from "../state/actions/setOpenBackground"

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
  transition: opacity 0.15s ease-in-out;

  &.is-closed {
    opacity: 0;
    z-index: 0;
    transition: opacity 0.15s ease-in-out;
  }
`

const MockupWrapper = styled.div`
  position: absolute;
`

const MockupContent = styled.div`
  height: 180px;
  width: calc(100vw - 20px);
  background-color: white;
  border-radius: 0 0 0.4rem 0.4rem;
  background-color: rgba(230, 230, 230, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (min-width: 470px) {
    width: 450px;
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

const Text = styled.p`
  margin-left: 10px;
  padding-bottom: 25px;

  @media (min-width: 450px) {
    margin-left: 20px;
  }
`

const Button = styled.button`
  position: absolute;
  bottom: 25px;
  right: 25px;
  background: linear-gradient(#81c5fd, #3389ff);
  color: white;
  border: none;
  height: 22px;
  width: 70px;
  cursor: pointer;
  border-radius: 5px;
  pointer-events: initial;

  &:active {
    background: linear-gradient(#4faefc, #006bff);
  }
`

const Icon = styled.svg`
  fill: #555555;
  margin-bottom: 25px;

  @media (max-width: 449px) {
    width: 40px;
  }
`

const Modal = () => {
  const refContainer = React.useRef()
  const refMockupWrapper = React.useRef()
  const dispatch = useDispatch();
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

  const closeModal = () => {
    dispatch(setOpenModal(false));
    dispatch(setOpenDock(false))
    dispatch(setOpenBackground(false))
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
              <MockupButton modifiers={"close"} onClick={closeModal}></MockupButton>
              <MockupButton></MockupButton>
              <MockupButton></MockupButton>
            </MockupButtons>
          </MockupBar>
          <MockupContent>
            <Icon
              id="Layer_1"
              enableBackground="new 0 0 512 512"
              height="60"
              viewBox="0 0 512 512"
              width="60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m424 64h-88v-16c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16h-88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zm-216-16c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96z" />
                <path d="m78.364 184c-2.855 0-5.13 2.386-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042c.136-2.852-2.139-5.238-4.994-5.238zm241.636 40c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z" />
              </g>
            </Icon>
            <Button onClick={closeModal}>OK</Button>
            <Text>Site has been successfully deleted.</Text>
          </MockupContent>
        </MockupWrapper>
      </Container>
    </>
  )
}

export default Modal
