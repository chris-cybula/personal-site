import React from "react"
import styled  from "styled-components"

const Container = styled.div`
  color: white;
`

const Heading = styled.h1`
  margin: 0;
`

const SubHeading = styled.h2`
  margin: 0;
`

const Headings = () => {
  return (
    <>
      <Container>
        <Heading>My name is Chris.</Heading>
        <SubHeading>I build things for the web.</SubHeading>
      </Container>
    </>
  )
}

export default Headings
