import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import { MyNameIs } from './my-name-is.jsx'
import Bio from './Bio.jsx'
import TodoList from './challenges/FixMistake.jsx'
import Animals from './Animals.jsx'
import DrinkList from './Conditional.jsx'
import People from './challenges/ListsChallenge.jsx'
import RecipeList from './challenges/ListTwo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipeList />
  </StrictMode>,
)

