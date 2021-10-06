import { useContext, useEffect } from 'react'

import CardBox from './components/card-box/card-box.component'

import { QuestionsContext } from './contexts/questions/questions.context'

import './App.css'

function App() {
  const {
    getQuestions, nextQuestion, questions, currentQuestion
  } = useContext(QuestionsContext)

  useEffect(() => {
    getQuestions()
  }, [])

  useEffect(() => {
    nextQuestion()
  }, [questions])

  const answers = []

  if (questions.length > 0 && currentQuestion) {
    while (answers.length < 3) {
      const randomIndex = Math.floor(Math.random() * (questions.length - 1))
      answers.push(questions[randomIndex].answer)
    }
    answers.push(currentQuestion.answer)
    answers.sort(() => 0.4 - Math.random())
  }

  return (
    <div className="App">
      <h1> Country Quiz </h1>
      <CardBox answers={answers} />
    </div>
  )
}

export default App
