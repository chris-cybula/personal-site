import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { applyStyleModifiers } from "styled-components-modifiers"
import { useDispatch, useSelector } from "react-redux";
import { setOpenBrowser } from "../state/actions/setOpenBrowser";

const MODIFIER_CONFIG = {
  linkedin: () => `
      background-color: #0077b5;
  `,

  github: () => `
      background-color: #333;
  `,

  mail: () => `
      background-color: #BB001B;
  `,

  browser: () => `
      background-color: #006CFF;
      padding: 4px;
  `,

  bin: () => `
      background-color: #555555;
      margin-right: 5px;
  `,

  music: () => `
      background-color: #7572ff;
      margin-right: 5px;
      // fill: EA4CC0;
  `,
}

const Container = styled.div`
  background-color: rgba(230, 230, 230, 0.9);
  border-radius: 0.4rem 0.4rem 0 0;
  position: fixed;
  z-index: 3;
  bottom: 0;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
  transition: transform .2s ease-in-out;

  &.is-hidden {
    transform: translate(-50%, 100%);
  }
`

const IconWrapper = styled.div`
  background-color: gray;
  fill: white;
  border-radius: 0.4rem;
  margin: 5px 0 5px 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${applyStyleModifiers(MODIFIER_CONFIG)};
`
const Line = styled.div`
  width: 1px;
  height: 30px;
  background-color: gray;
  margin-top: 5px;
`
const Link = styled.a`
  height: 30px;
  width: 30px;
  position: absolute;
  border-radius: 0.4rem;
`

const Dock = () => {
  const dispatch = useDispatch();
  const [dockActive, setDockActive] = useState(false)

  useEffect(() => {
    setTimeout(() => setDockActive(true), 3000)
  }, [])

  const openBrowser = () => {
    dispatch(setOpenBrowser(true));
  }

  return (
    <>
      <Container className={`${dockActive === true ? "" : "is-hidden"}`}>
        <IconWrapper modifiers={"browser"} onClick={openBrowser}>
          <svg
            id="Layer_1"
            enableBackground="new 0 0 512 512"
            height="21"
            viewBox="0 0 512 512"
            width="21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m302.098 265.672 31.115-77.786c2.286-5.714-3.385-11.385-9.099-9.099l-77.786 31.115c-4.666 1.866-5.903 7.896-2.35 11.449l46.672 46.672c3.553 3.553 9.582 2.315 11.448-2.351z" />
              <path d="m187.886 333.213 77.786-31.115c4.666-1.866 5.904-7.896 2.35-11.449l-46.672-46.672c-3.553-3.553-9.583-2.316-11.449 2.35l-31.115 77.786c-2.285 5.715 3.386 11.386 9.1 9.1z" />
              <path d="m437.02 74.98c-48.353-48.352-112.64-74.98-181.02-74.98s-132.667 26.628-181.02 74.98-74.98 112.64-74.98 181.02 26.628 132.667 74.98 181.02 112.64 74.98 181.02 74.98 132.667-26.628 181.02-74.98 74.98-112.64 74.98-181.02-26.628-132.667-74.98-181.02zm-54.165 74.962-64 160c-1.626 4.065-4.848 7.287-8.913 8.913l-160 64c-1.926.771-3.941 1.145-5.939 1.145-4.167 0-8.258-1.628-11.317-4.687-4.525-4.526-5.919-11.313-3.542-17.256l64-160c1.626-4.065 4.848-7.287 8.913-8.913l160-64c5.944-2.377 12.73-.983 17.256 3.542 4.526 4.526 5.92 11.314 3.542 17.256z" />
            </g>
          </svg>
        </IconWrapper>

        <IconWrapper modifiers={"mail"}>
          <Link href="mailto:chris.cybula@gmail.com">
          </Link>
          <svg
            id="Capa_1"
            enableBackground="new 0 0 512 512"
            height="20"
            viewBox="0 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.688,95.156C80.958,154.667,204.26,259.365,240.5,292.01c4.865,4.406,10.083,6.646,15.5,6.646
				      c5.406,0,10.615-2.219,15.469-6.604c36.271-32.677,159.573-137.385,229.844-196.896c4.375-3.698,5.042-10.198,1.5-14.719
				      C494.625,69.99,482.417,64,469.333,64H42.667c-13.083,0-25.292,5.99-33.479,16.438C5.646,84.958,6.313,91.458,10.688,95.156z"
            />
            <path
              d="M505.813,127.406c-3.781-1.76-8.229-1.146-11.375,1.542C416.51,195.01,317.052,279.688,285.76,307.885
				      c-17.563,15.854-41.938,15.854-59.542-0.021c-33.354-30.052-145.042-125-208.656-178.917c-3.167-2.688-7.625-3.281-11.375-1.542
				      C2.417,129.156,0,132.927,0,137.083v268.25C0,428.865,19.135,448,42.667,448h426.667C492.865,448,512,428.865,512,405.333
				      v-268.25C512,132.927,509.583,129.146,505.813,127.406z"
            />
          </svg>
        </IconWrapper>


        <IconWrapper modifiers={"github"}>
          <Link href="https://github.com/chris-cybula" target="_blank">
          </Link>
          <svg
            enableBackground="new 0 0 24 24"
            height="20"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
          </svg>
        </IconWrapper>

        <IconWrapper modifiers={"linkedin"}>
          <Link href="https://www.linkedin.com/in/chris-cybula" target="_blank">
          </Link>
          <svg
            id="Bold"
            enableBackground="new 0 0 24 24"
            height="20"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" />
            <path d="m.396 7.977h4.976v16.023h-4.976z" />
            <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" />
          </svg>
        </IconWrapper>

        <IconWrapper modifiers={"music"}>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          </Link>
          <svg
            id="Layer_1"
            enableBackground="new 0 0 512 512"
            height="20"
            viewBox="0 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M472.184,4.347c-3.631-3.209-8.441-4.75-13.261-4.25l-307.2,34.133c-8.647,0.957-15.19,8.265-15.189,16.964V355.34
                c-15.468-9.256-33.174-14.102-51.2-14.012C38.281,341.329,0,371.946,0,409.595s38.281,68.267,85.333,68.267
                s85.333-30.601,85.333-68.267V151.889l273.067-30.413v199.68c-15.473-9.238-33.179-14.066-51.2-13.961
                c-47.053,0-85.333,30.618-85.333,68.267c0,37.649,38.281,68.267,85.333,68.267s85.333-30.601,85.333-68.267v-358.4
                C477.866,12.208,475.8,7.584,472.184,4.347z"
              />
            </g>
          </svg>
        </IconWrapper>

        <Line></Line>

        <IconWrapper modifiers={"bin"}>
          <svg
            id="Layer_1"
            enableBackground="new 0 0 512 512"
            height="20"
            viewBox="0 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m424 64h-88v-16c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16h-88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zm-216-16c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96z" />
              <path d="m78.364 184c-2.855 0-5.13 2.386-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042c.136-2.852-2.139-5.238-4.994-5.238zm241.636 40c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z" />
            </g>
          </svg>
        </IconWrapper>
      </Container>
    </>
  )
}

export default Dock
