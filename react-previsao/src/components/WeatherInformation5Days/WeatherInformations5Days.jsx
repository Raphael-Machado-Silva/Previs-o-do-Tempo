/* eslint-disable react/prop-types */
import './WeatherInformation5Days.css'

function WeatherInformations5Days({ weather5Days }) {

    console.log(weather5Days);

    let dailyForecast = {}

    for(let forecast of weather5Days.list){
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if(!dailyForecast[date]){
            dailyForecast[date] = forecast
        }

    }
    
    const next5DaysForecast = Object.values(dailyForecast).slice(1,6)

    function convertDate(date){
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday: 'long', day:'2-digit'})
        
        return newDate
    }


    return (
        <div className='weather-container5Days'>
            <h3 className='prox_dias'>Próximos Dias</h3>
            <div className='Info_geral'>
            {next5DaysForecast.map(forecast => (
                <div key={forecast.dt} className='Info_days'>
                    <p className='day'>{convertDate(forecast)}</p>
                    <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} className='img_icon'></img>
                    <p className='state'>{forecast.weather[0].description}</p>
                    <p className='state'>{Math.round(forecast.main.temp_max)}ºC</p>
                </div>
            ))}
            </div>

        </div>
    );
}

export default WeatherInformations5Days;
