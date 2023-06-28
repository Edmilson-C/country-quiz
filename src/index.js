import React from 'react'
import ReactDOM from 'react-dom'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import App from './App'
import { QuestionsProvider } from './contexts/questions/questions.context'
import './index.css'
import Quiz from './Quiz'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/quiz',
    element: <Quiz />
  }
])
ReactDOM.render(
  <React.StrictMode>
    <QuestionsProvider>

      <RouterProvider router={router} />
    </QuestionsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
