import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [weather, setWeather] = useState({})

  const inputRef = useRef()

  async function searchCity(){
    const city = inputRef.current.value // valor do input
    const key = '3330db65845f4c9434035c7f0b5063a2' // chave da API

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`


    const apiInfo = await axios.get(url)//pegando TODAS as inf da api
    setWeather(apiInfo.data) // pegando apenas os dados necessários
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
