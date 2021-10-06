import { createContext, useState } from 'react'

import { requestData } from './question.data'

export const QuestionsContext = createContext({
  rightAnswers: 0,
  currentQuestion: {},
  askedQuestions: [],
  questions: [],
  getQuestions: () => {},
  nextQuestion: () => {},
  increaseRightAnswers: () => {},
  resetRightAnswers: () => {}
})

export const QuestionsProvider = ({ children }) => {
  const [rightAnswers, setRightAnswers] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState({ question: '', answer: '' })
  const [askedQuestions, setAskedQuestions] = useState([])
  const [questions, setQuestions] = useState([])

  const getQuestions = async () => {
    try {
      const data = await requestData()
      setQuestions([...data])
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert(`An error occurred while loading questions \n${err}`)
    }
  }

  const nextQuestion = () => {
    let cond = true
    while (cond) {
      const randomIndex = Math.floor(Math.random() * (questions.length - 1))
      if (!askedQuestions.includes(randomIndex)) {
        setAskedQuestions([...askedQuestions, randomIndex])
        setCurrentQuestion(questions[randomIndex])
        cond = false
      }
    }
  }

  const increaseRightAnswers = () => {
    setRightAnswers(rightAnswers + 1)
  }

  const resetRightAnswers = () => {
    setRightAnswers(0)
  }

  return (
    <QuestionsContext.Provider
      value={{
        rightAnswers,
        currentQuestion,
        askedQuestions,
        questions,
        getQuestions,
        nextQuestion,
        increaseRightAnswers,
        resetRightAnswers
      }}
    >
      {children}
    </QuestionsContext.Provider>
  )
}
