import { useState, useEffect } from 'react';
import weatherService from '../services/weather';

const ShowInfo = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (country) {
      weatherService
        .getWeatherInfo(country.capital)
        .then((weather) => setWeather(weather));
    }
  }, [country]);

  // console.log(JSON.stringify(weather));

  const languages = Object.values(country.languages);
  return (
    <div>
      {/* display country's name */}
      <h1>{country.name.common}</h1>
      {/* display capital */}
      <div>capital {country.capital}</div>
      {/* display area code */}
      <div>area {country.area}</div>
      <br />
      {/* display languages */}
      <div>
        {' '}
        <strong>languages</strong>
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
      {/* display flag png */}
      <img src={country.flags.png} alt={country.flags.alt} />
      <h2>Weather in {country.capital}</h2>
      {weather && (
        <div>
          <div>temperature {weather.main.temp} Celsius</div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <div>wind {weather.wind.speed} m/s</div>
        </div>
      )}
    </div>
  );
};

export default ShowInfo;
