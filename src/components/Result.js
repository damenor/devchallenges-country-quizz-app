import React from 'react'
import styled from 'styled-components'

import useApp from '../hooks/useApp'

import { COLORS } from '../styles/global'

const Result = styled.div`
  display: grid;
  grid-template-rows: 220px auto auto;
  animation: fadeIn .4s;
  img {
    align-self: center;
    height: 100%auto;
  }
`

const ResultImage = styled.img`
  margin: 0 auto;
`

const ResultText = styled.div`
  text-align: center;
  h3 {
    margin: 0;
    color: ${COLORS.PRIMARY};
    font-size: 4rem;
  }
  p {
    color: ${COLORS.GRAY};
    font-size: 1.5rem;
    span {
      margin: 0 0.5rem;
      color: ${COLORS.SUCCESS};
      font-size: 4rem;
    }
  }
`

const ResultButton = styled.button`
  margin: 2rem auto;
  padding: 1rem 2rem;
  color: ${COLORS.PRIMARY};
  font-size: 2rem;
  font-weight: bold;
  background-color: transparent;
  border: 4px solid ${COLORS.PRIMARY};
  border-radius: 1rem;
  cursor: pointer;
`

const ResultComponent = () => {

  const { setIsStarted, correctAnswers } = useApp()

  return (
    <Result>
      <ResultImage src="images/winner.svg"></ResultImage>
      <ResultText>
        <h3>Results</h3>
        <p>You got <span>{correctAnswers}</span> correct answers</p>
      </ResultText>
      <ResultButton onClick={() => setIsStarted(true)}>Try again</ResultButton>
    </Result>
  )
}

export default ResultComponent
