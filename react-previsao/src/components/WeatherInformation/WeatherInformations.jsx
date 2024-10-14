/* eslint-disable react/prop-types */


function WeatherInformations({weather}){

    if (!weather || !weather.weather || weather.weather.length === 0) {
        // Retorna uma mensagem de carregamento ou outra mensagem apropriada enquanto os dados não chegam
        return <div>Esperando Localização...</div>;
    }

    console.log(weather)
    
    return(
        <div>
            <h2>{weather.name}</h2>
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" />

                <p>{Math.round(weather.main.temp)}ºC</p> 
            </div>
            <p>{weather.weather[0].description}</p>
            <div>
                <p>Sensação Térmica: {Math.round(weather.main.feels_like)}ºC</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure}</p>
            </div>
        </div>
    )
}

export default WeatherInformations