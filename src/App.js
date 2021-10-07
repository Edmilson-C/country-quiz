import { useContext, useEffect } from 'react'
import { shuffle } from 'shuffle-seed'

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

  let answers = []

  if (questions.length > 0 && currentQuestion) {
    while (answers.length < 3) {
      const randomIndex = Math.floor(Math.random() * (questions.length - 1))
      answers.push(questions[randomIndex].answer)
    }
    answers.push(currentQuestion.answer)
    answers.sort(() => 0.4 - Math.random())
    answers = shuffle(answers, currentQuestion.answer)
  }

  return (
    <div className="App">
      <h1 className="App__title"> Country Quiz </h1>
      <CardBox answers={answers} />
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <p className="App__copyright"> Created by <a href="https://github.com/Edmilson-C">Edmilson da Conceição</a> - DevChallenges.io </p>
    </div>
  )
}

export default App
