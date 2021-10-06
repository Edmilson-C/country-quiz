/* eslint-disable no-nested-ternary */
import React, { useContext, useState, useEffect } from 'react'

import Button from '../button/button.component'

import { QuestionsContext } from '../../contexts/questions/questions.context'

import './card-box.styles.scss'

const CardBox = ({ answers }) => {
  const { currentQuestion, questions, nextQuestion } = useContext(QuestionsContext)
  const [chosenOption, setChosenOption] = useState('')
  const [rightAnswerIndex, setRightAnswerIndex] = useState(-1)

  // useEffect(() => {
  //   if (questions.length > 0 && currentQuestion) {
  //     while (temp.length < 3) {
  //       const randomIndex = Math.floor(Math.random() * (questions.length - 1))
  //       temp.push(questions[randomIndex].answer)
  //     }
  //     temp.push(currentQuestion.answer)
  //     temp.sort(() => 0.4 - Math.random())
  //   }
  // }, [temp])

  const checkAnswer = (event) => {
    const { name, value } = event.target
    setRightAnswerIndex(answers.indexOf(currentQuestion.answer))
    if (value !== currentQuestion.answer) {
      setChosenOption(name)
    }
  }

  return currentQuestion ? (
    <div className="card-box">
      <h3 className="card-box__heading">{currentQuestion.question}</h3>
      <Button
        // type={rightAnswerIndex === 0 ? 'answer--right' : 'answer'}
        type={rightAnswerIndex === 0 ? 'answer--right' : chosenOption === 'A' ? 'answer--wrong' : 'answer'}
        option="A"
        content={answers[0]}
        handleClick={checkAnswer}
      />
      <Button
        // type={rightAnswerIndex === 1 ? 'answer--right' : 'answer'}
        type={rightAnswerIndex === 1 ? 'answer--right' : chosenOption === 'B' ? 'answer--wrong' : 'answer'}
        option="B"
        content={answers[1]}
        handleClick={checkAnswer}
      />
      <Button
        // type={rightAnswerIndex === 2 ? 'answer--right' : 'answer'}
        type={rightAnswerIndex === 2 ? 'answer--right' : chosenOption === 'C' ? 'answer--wrong' : 'answer'}
        option="C"
        content={answers[2]}
        handleClick={checkAnswer}
      />
      <Button
        // type={rightAnswerIndex === 3 ? 'answer--right' : 'answer'}
        type={rightAnswerIndex === 3 ? 'answer--right' : chosenOption === 'D' ? 'answer--wrong' : 'answer'}
        option="D"
        content={answers[3]}
        handleClick={checkAnswer}
      />
      <Button
        type="next"
        content="Next"
        handleClick={nextQuestion}
      />
    </div>
  ) : (
    <div> Loading </div>
  )
}

export default CardBox
