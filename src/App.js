import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { QuestionsContext } from './contexts/questions/questions.context'

import './App.css'

function App() {
  useContext(QuestionsContext)
  return (
    <div className="App">
      <h1 className="App__title"> Descubra o quanto você sabe sobre Inclusão Digital em Moçambique: Teste seu conhecimento agora mesmo! </h1>
      <Link className="start-btn" to="/quiz"> Iniciar </Link>
      <p className="App__copyright">
        {' '}
        Created by
        {' '}
        <a href="https://github.com/Edmilson-C">Technoplus</a>
      </p>
    </div>
  )
}

export default App
