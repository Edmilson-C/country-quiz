import { createContext } from 'react'

import { requestedData } from './question.data'

const QuestionsContext = createContext(requestedData)

export default QuestionsContext
