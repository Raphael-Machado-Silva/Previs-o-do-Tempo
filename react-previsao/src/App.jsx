import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const inputRef = useRef()

  function searchCity(){
    console.log(inputRef.current.value) // pegando valor do input
  }

  return (
    <div>
      <h1>DevClub Previsão do Tempo</h1>

      <input 
      type='text' 
      placeholder='Digite a localização' 
      ref={inputRef}></input>
      <button onClick={searchCity}>Buscar</button>
    </div>
  )
}

export default App
