import { createContext, useEffect, useState } from 'react'

import QUESTIONS_JSON from './data.json'
import { shuffleArray } from '../../utils'

export const QuestionsContext = createContext({
  nextQuestion: () => { },
  resetQuiz: () => { },
  currentQuestion: {},
  currentQuestionIndex: 0,
  setCurrentQuestion: () => { },
  questions: []
})

export const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useState(QUESTIONS_JSON)
  const [currentQuestion, setCurrentQuestion] = useState()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const resetQuiz = () => {
    const shuffledQuestions = shuffleArray(questions)
    setQuestions(shuffledQuestions)
    const question = shuffledQuestions[0]
    question.alternatives = shuffleArray(question.alternatives)
    setCurrentQuestion(question)
    setCurrentQuestionIndex(0)
  }
  useEffect(() => {
    resetQuiz()
  }, [])

  const nextQuestion = () => {
    const next = currentQuestionIndex + 1
    const question = questions[next]
    question.alternatives = shuffleArray(question.alternatives)
    setCurrentQuestionIndex(next)
    setCurrentQuestion(question)
  }

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        currentQuestion,
        nextQuestion,
        currentQuestionIndex,
        resetQuiz,
        setCurrentQuestion
      }}
    >
      {children}
    </QuestionsContext.Provider>
  )
}
