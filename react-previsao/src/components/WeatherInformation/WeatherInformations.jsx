/* eslint-disable react/prop-types */
import './WeatherInformation.css'

function WeatherInformations({weather}){

    if (!weather || !weather.weather || weather.weather.length === 0) {
        // Retorna uma mensagem de carregamento ou outra mensagem apropriada enquanto os dados não chegam
        return <div>Esperando Localização...</div>;
    }

    
    return(
        <div className='weather-container'>
            <h2>{weather.name}</h2>
            <div className='weather-info'>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" className='img_icon'/>

                <p className='temperature'>{Math.round(weather.main.temp)}ºC</p> 
            </div>
            <p className='description'>{weather.weather[0].description}</p>
            <div className='details'>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Sensação Térmica: {Math.round(weather.main.feels_like)}ºC</p>
                <p>Pressão: {weather.main.pressure}hPa</p>
            </div>
        </div>
    )
}

export default WeatherInformations