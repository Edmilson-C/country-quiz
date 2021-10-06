import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { QuestionsProvider } from './contexts/questions/questions.context'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <QuestionsProvider>
      <App />
    </QuestionsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
