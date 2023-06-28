import { useContext } from 'react'
import Button from '../button/button.component'
import { QuestionsContext } from '../../contexts/questions/questions.context'

export const QuizOption = ({
  checkAnswer, option, valeu, chosenOption
}) => {
  const {
    currentQuestion
  } = useContext(QuestionsContext)
  return (
    <Button
      type={
        // eslint-disable-next-line no-nested-ternary
        currentQuestion.answer === valeu && chosenOption === valeu
          ? 'answer--right'
          : chosenOption === valeu ? 'answer--wrong'
            : 'answer'
      }
      option={option}
      content={valeu}
      handleClick={checkAnswer}
    />
  )
}
