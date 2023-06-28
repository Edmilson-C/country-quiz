/* eslint-disable no-nested-ternary */
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../button/button.component'
import Spinner from '../spinner/spinner.component'

import { QuestionsContext } from '../../contexts/questions/questions.context'

import { ReactComponent as WinnersIcon } from '../../assets/winners.svg'
import { ReactComponent as AdventureIcon } from '../../assets/adventure.svg'

import './card-box.styles.scss'
import { QuizOption } from './quiz-option'
import { calculatePercentage } from '../../utils'

const CardBox = () => {
  const {
    currentQuestion, nextQuestion, resetQuiz, questions, currentQuestionIndex
  } = useContext(QuestionsContext)
  const navigate = useNavigate()

  const [chosenOption, setChosenOption] = useState('')
  const [didLose, setDidLose] = useState(false)
  const [rightAnswers, setRightAnswers] = useState(0)

  const moveToNext = () => {
    setChosenOption('')
    nextQuestion()
  }

  const tryAgain = () => {
    resetQuiz()
    setChosenOption('')
    setRightAnswers(0)
    setDidLose(false)
    navigate('/')
  }

  const checkAnswer = (event) => {
    if (chosenOption) return
    const { value } = event.target
    setChosenOption(value)
    if (value === currentQuestion.answer) {
      setRightAnswers(rightAnswers + 1)
    }
    setTimeout(() => {
      if (currentQuestionIndex >= questions.length - 1) {
        setDidLose(true)
        return
      }
      moveToNext()
    }, 500)
  }
  const renderAdvice = () => {
    if (rightAnswers <= 5) return 'Você precisa aprender mais sobre a inclusão digital em Moçambique. Continue se informando!'
    if (rightAnswers <= 10) return 'Você tem um bom conhecimento sobre a inclusão digital em Moçambique. Parabéns!'
    return 'Você é um especialista em inclusão digital em Moçambique. Incrível!'
  }

  return currentQuestion ? (
    <div className="card-box">
      {didLose ? (
        <div className="card-box__try-again">
          <WinnersIcon />
          <div className="card-box__results">
            <h1> Resultado </h1>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <p>Você acertou <span className="card-box__right-answers">{rightAnswers}</span> de <span className="card-box__total-answers">{questions.length}</span>.</p>
            <p>{renderAdvice()}</p>
          </div>
          <Button type="try-again" content="Tentar novamente!" handleClick={tryAgain} />
        </div>
      ) : (
        <>
          <AdventureIcon className="card-box__adventure-icon" />
          <h3 className="card-box__question">{currentQuestion.question}</h3>
          <QuizOption
            chosenOption={chosenOption}
            option="A"
            valeu={currentQuestion.alternatives[0]}
            checkAnswer={checkAnswer}
          />
          <QuizOption
            chosenOption={chosenOption}
            option="B"
            valeu={currentQuestion.alternatives[1]}
            checkAnswer={checkAnswer}
          />
          <QuizOption
            chosenOption={chosenOption}
            option="C"
            valeu={currentQuestion.alternatives[2]}
            checkAnswer={checkAnswer}
          />
          <QuizOption
            chosenOption={chosenOption}
            option="D"
            valeu={currentQuestion.alternatives[3]}
            checkAnswer={checkAnswer}
          />
          <div className="progress">
            <div style={{ width: `${calculatePercentage(currentQuestionIndex, questions.length - 1)}%` }} className="progress-value" />
          </div>
        </>
      )}
    </div>
  ) : (
    <Spinner />
  )
}

export default CardBox
