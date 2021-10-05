import React, { useContext } from 'react'

import Button from '../button/button.component'

import { QuestionsContext } from '../../contexts/questions/questions.context'

import './card-box.styles.scss'

const CardBox = () => {
  const {
    currentQuestion, questions, nextQuestion
  } = useContext(QuestionsContext)

  const temp = []

  if (questions.length > 0 && currentQuestion) {
    while (temp.length < 3) {
      const randomIndex = Math.floor(Math.random() * (questions.length - 1))
      temp.push(questions[randomIndex].answer)
    }
    temp.push(currentQuestion.answer)
    temp.sort(() => 0.4 - Math.random())
  }

  return currentQuestion ? (
    <div className="card-box">
      <h3 className="card-box__heading">{currentQuestion.question}</h3>
      <Button type="answer" option="A" content={temp[0]} />
      <Button type="answer" option="B" content={temp[1]} />
      <Button type="answer" option="C" content={temp[2]} />
      <Button type="answer" option="D" content={temp[3]} />
    </div>
  ) : (
    <div> Loading </div>
  )
}

export default CardBox
