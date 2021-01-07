import React, { useState, useMemo } from 'react'

import AppContext from './contexts/AppContext'

import Container from './components/Container'
import Question from './components/Question'
import Result from './components/Result'

const App = () => {

  const [isStarted, setIsStarted] = useState(true)
  const [correctAnswers, setCorrectAnswers] = useState(40)

  const appData = useMemo(() => ({
    isStarted, 
    setIsStarted,
    correctAnswers, 
    setCorrectAnswers
  }), [isStarted, setIsStarted, correctAnswers, setCorrectAnswers])
  
  return (
    <AppContext.Provider value={appData}>
      <Container title={'Country Quizz'}>
        { isStarted && <Question></Question> }
        { !isStarted && <Result></Result> }
      </Container>
    </AppContext.Provider>
  )
}

export default App
