/* eslint-disable react/prop-types */
import './WeatherInformation5Days.css'

function WeatherInformations5Days({ weather5Days }) {
    // Corrigido de weather5days para weather5Days
    if (!weather5Days || !weather5Days.weather || weather5Days.weather.length === 0) {
        // Retorna uma mensagem de carregamento ou outra mensagem apropriada enquanto os dados não chegam
        return <div>Esperando Informações...</div>;
    }

    console.log(weather5Days);

    return (
        <div className='weather-container'>
            <p>5 Days</p>
        </div>
    );
}

export default WeatherInformations5Days;
