import { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';
import WeatherInformations from './components/WeatherInformation/WeatherInformations';
import WeatherInformations5Days from './components/WeatherInformation5Days/WeatherInformations5Days';

function App() {
  const [weather, setWeather] = useState(null);
  const [weather5Days, setWeather5Days] = useState(null);
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = '3330db65845f4c9434035c7f0b5063a2';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    try {
      const apiInfo = await axios.get(url);
      const apiInfo5Days = await axios.get(url5Days);
      
      setWeather(apiInfo.data);
      setWeather5Days(apiInfo5Days.data);
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  }

  return (
    <div className='body'>
      <header>
        <a href="#" className="logo_rm">
          <p className="logo">RM</p>
        </a>
        <nav>
          <div className="pesquisar_div">
            <input 
              type="text" 
              placeholder="Digite a localização" 
              ref={inputRef}
            />
            <button onClick={searchCity} className="button">
              {/* Atualizado para acessar a imagem da pasta public */}
              <img src="./search.svg" alt="Search" width="30px" className="search" />
            </button>
          </div>
          <a href="#contacts" className="contato navlist">Contato</a>
        </nav>
        <a className='linkedin_link' href="https://www.linkedin.com/in/raphael-machado-silva-74457a291/" target='_blank'>
          {/* Atualizado para acessar a imagem da pasta public */}
          <img src="./linkedin-svgrepo-com.svg" width="50px" alt="LinkedIn" className="img" />
        </a>
      </header>

      <div className='container'>
        <h1 className='title'>
          {weather ? `Previsão do Tempo` : 'Digite uma Localização...'}
        </h1>

        {!weather && (
          <div className='gift' style={{ width: '100%', height: '0', paddingBottom: '67%', position: 'relative', pointerEvents: 'none' }}>
            <iframe 
              src="https://giphy.com/embed/VI2UC13hwWin1MIfmi" 
              width="70%" 
              height="70%" 
              style={{ position: 'absolute' }} 
              frameBorder="0" 
              className="giphy-embed" 
              allowFullScreen
            ></iframe>
          </div>
        )}

        {weather && <WeatherInformations weather={weather} />}
        {weather5Days && <WeatherInformations5Days weather5Days={weather5Days} />}
      </div>

      <footer className="footer">
        <div className="social">
          <a href="https://github.com/Raphael-Machado-Silva" target='_blank'>
            {/* Atualizado para acessar a imagem da pasta public */}
            <img src="./github.svg" alt="GitHub" className='img_footer' />
          </a>
          <a href="#curriculo">
            {/* Atualizado para acessar a imagem da pasta public */}
            <img src="./doc2.svg" alt="Currículo" className='img_footer' />
          </a>
        </div>

        <ul className="list">
          <li><a href="#">Sobre Mim</a></li>
          <li><a href="#">Contato</a></li>
        </ul>

        <p className="copyright">
          © Raphael Machado | Todos os Direitos Reservados
        </p>
      </footer>
    </div>
  );
}

export default App;
