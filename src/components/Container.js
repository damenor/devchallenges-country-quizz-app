import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../styles/global'

const Container = styled.div`
  max-width: 450px;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  background-image: url('images/background.png');
  background-position: center;
  background-size: cover;
`

const ContainerTitle = styled.h2`
  width: 100%;
  margin: 0.5rem 0;
  color: ${COLORS.LIGHT};
  font-size: 1.5rem;
  text-transform: uppercase;
`

const ContainerContent = styled.div`
  width: 100%;
  background-color: ${COLORS.LIGHT};
  border-radius: 1rem;
`

const ContainerComponent = ({ children, title }) => {

  return (
    <Container>
      <ContainerTitle>{ title }</ContainerTitle>
      <ContainerContent>{ children }</ContainerContent>
    </Container>
  )
}

export default ContainerComponent
