import { useContext, useEffect } from 'react'

import CardBox from './components/card-box/card-box.component'

import { QuestionsContext } from './contexts/questions/questions.context'

import './App.css'

function App() {
  const { getQuestions, nextQuestion, questions } = useContext(QuestionsContext)

  useEffect(() => {
    getQuestions()
    nextQuestion()
  }, [])

  useEffect(() => {
    nextQuestion()
  }, [questions])

  return (
    <div className="App">
      <h1> Country Quiz </h1>
      <CardBox />
    </div>
  )
}

export default App
