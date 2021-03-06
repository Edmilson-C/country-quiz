/* eslint-disable no-nested-ternary */
import React, { useContext, useState } from 'react'

import Button from '../button/button.component'
import Spinner from '../spinner/spinner.component'

import { QuestionsContext } from '../../contexts/questions/questions.context'

import { ReactComponent as WinnersIcon } from '../../assets/winners.svg'
import { ReactComponent as AdventureIcon } from '../../assets/adventure.svg'

import './card-box.styles.scss'

const CardBox = ({ answers }) => {
  const {
    currentQuestion, rightAnswers, increaseRightAnswers, nextQuestion, resetRightAnswers
  } = useContext(QuestionsContext)

  const [chosenOption, setChosenOption] = useState('')
  const [rightAnswerIndex, setRightAnswerIndex] = useState(-1)
  const [isRight, setIsRight] = useState(false)
  const [didLose, setDidLose] = useState(false)

  const checkAnswer = (event) => {
    const { name, value } = event.target
    setRightAnswerIndex(answers.indexOf(currentQuestion.answer))
    if (value !== currentQuestion.answer) {
      setChosenOption(name)
      setTimeout(() => {
        setDidLose(true)
      }, 1000)
    } else {
      setIsRight(true)
    }
  }

  const moveToNext = () => {
    nextQuestion()
    setRightAnswerIndex(-1)
    setChosenOption('')
    increaseRightAnswers()
    setIsRight(false)
  }

  const tryAgain = () => {
    nextQuestion()
    setRightAnswerIndex(-1)
    setChosenOption('')
    resetRightAnswers()
    setIsRight(false)
    setDidLose(false)
  }

  return currentQuestion ? (
    <div className="card-box">
      {didLose ? (
        <div className="card-box__try-again">
          <WinnersIcon />
          <div className="card-box__results">
            <h1> Results </h1>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <p>You got <span className="card-box__right-answers">{rightAnswers}</span> correct answers.</p>
          </div>
          <Button type="try-again" content="Try Again" handleClick={tryAgain} />
        </div>
      ) : (
        <>
          <AdventureIcon className="card-box__adventure-icon" />
          <h3 className="card-box__question">{currentQuestion.question}</h3>
          <Button
            type={
              rightAnswerIndex === 0
                ? 'answer--right'
                : chosenOption === 'A'
                  ? 'answer--wrong'
                  : 'answer'
            }
            option="A"
            content={answers[0]}
            handleClick={checkAnswer}
          />
          <Button
            type={
              rightAnswerIndex === 1
                ? 'answer--right'
                : chosenOption === 'B'
                  ? 'answer--wrong'
                  : 'answer'
            }
            option="B"
            content={answers[1]}
            handleClick={checkAnswer}
          />
          <Button
            type={
              rightAnswerIndex === 2
                ? 'answer--right'
                : chosenOption === 'C'
                  ? 'answer--wrong'
                  : 'answer'
            }
            option="C"
            content={answers[2]}
            handleClick={checkAnswer}
          />
          <Button
            type={
              rightAnswerIndex === 3
                ? 'answer--right'
                : chosenOption === 'D'
                  ? 'answer--wrong'
                  : 'answer'
            }
            option="D"
            content={answers[3]}
            handleClick={checkAnswer}
          />
          {isRight && <Button type="next" content="Next" handleClick={moveToNext} />}
        </>
      )}
    </div>
  ) : (
    <Spinner />
  )
}

export default CardBox
