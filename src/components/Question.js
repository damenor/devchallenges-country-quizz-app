import React from 'react'
import styled from 'styled-components'

import useApp from '../hooks/useApp'

import { COLORS } from '../styles/global'

const Question = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  animation: fadeIn .4s;
`

const QuestionImage = styled.img`
  position: absolute;
  top: -3rem;
  right: 0rem;
  width: 6rem;
`

const QuestionText = styled.p`
  margin: 0;
  margin: 2rem 0;
  color: ${COLORS.PRIMARY};
  font-size: 2rem;
  font-weight: bold;
`

const QuestionAnswers = styled.div`
  display: flex;
  flex-direction: column;
`

const QuestionAnswersItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;
  color: ${COLORS.PRIMARY};
  border: 1px solid ${COLORS.PRIMARY};
  border-radius: 1rem;
  cursor: pointer;
  p {
    margin: 0;
    padding: 0 1rem;
    flex: 1;
  }
`

const QuestionButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  button {
    padding: 1rem 2rem;
    color: #f7f7f7;
    font-size: 1.5rem;
    text-transform: uppercase;
    background-color: orange;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
  }
`

const QuestionComponent = () => {

  const { setIsStarted } = useApp()

  const handleOnButton = () => {
    setIsStarted(false)
  }

  return (
    <Question>

      <QuestionImage src="images/human.svg" alt="human"/>
      <QuestionText>Kuala Lumpur is the capital of</QuestionText>

      <QuestionAnswers>

        <QuestionAnswersItem>
          <span>A</span>
          <p>Vietnam</p>
        </QuestionAnswersItem>
        <QuestionAnswersItem>
          <span>B</span>
          <p>Malaysia</p>
        </QuestionAnswersItem>
        <QuestionAnswersItem>
          <span>C</span>
          <p>Sweden</p>
        </QuestionAnswersItem>
        <QuestionAnswersItem>
          <span>D</span>
          <p>Austria</p>
        </QuestionAnswersItem>

      </QuestionAnswers>

      <QuestionButton onClick={handleOnButton}>
        <button>Next</button>
      </QuestionButton>

    </Question>
  )
}

export default QuestionComponent
