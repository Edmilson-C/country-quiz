import { useContext } from 'react'

import CardBox from './components/card-box/card-box.component'

import { QuestionsContext } from './contexts/questions/questions.context'

import './App.css'

function Quiz() {
  useContext(QuestionsContext)
  return (
    <div className="App">
      <h1 className="App__title"> Inclusão Digital em Moçambique </h1>
      <CardBox />
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <p className="App__copyright"> Created by <a href="https://github.com/Edmilson-C">Technoplus</a></p>
    </div>
  )
}

export default Quiz
