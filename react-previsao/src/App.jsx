import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/WeatherInformation/WeatherInformations'

function App() {
  const [weather, setWeather] = useState()

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
      <header>
            <a href="#" className="logo_rm navlist">
                <p className="logo">RM</p>
            </a>
        <nav>

            <a href="#home" className='navlist'>Previsão</a>
            <a href="#contacts" className='navlist'>Contato</a>
        </nav>
        <a href="https://www.linkedin.com/in/raphael-machado-silva-74457a291/" ><img src="./public/linkedin-svgrepo-com.svg" width="50px" alt="" /></a>
     </header>
      <h1>DevClub Previsão do Tempo</h1>

      <input 
      type='text' 
      placeholder='Digite a localização' 
      ref={inputRef}></input>
      <button onClick={searchCity}>Buscar</button>

      {weather &&<WeatherInformations weather = {weather}></WeatherInformations>}
    </div>
  )
}

export default App
