import { useState } from 'react'
import './App.css'
import WordGame from './components/WordGame'

function App() {

  return (
    <div>
      <h1>끝말잇기
      <WordGame startWord='학교'/>
      </h1>
    </div>
  )
}

export default App
