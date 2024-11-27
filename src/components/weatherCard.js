import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  // Extract weather data if available, otherwise show defaults
  const cityName = weather?.name || "Unknown City";
  const country = weather?.sys?.country || "Unknown Country";
  const temperature = weather?.main?.temp || "N/A";
  const description = weather?.weather?.[0]?.description || "No description available";
  const humidity = weather?.main?.humidity || "N/A";
  const windSpeed = weather?.wind?.speed || "N/A";
  const icon = weather?.weather?.[0]?.icon || "01d"; // Default to clear weather icon

  // OpenWeatherMap icon URL
  const weatherIconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="main-card">
      {/* Weather Information Card */}
      <div className="weather-card">
        {weather ? (
          <>
            {/* Weather Header Section */}
            <div className="weather-header">
              <h2>{cityName}, {country}</h2>
              <img src={weatherIconUrl} alt={description} className="weather-icon" />
            </div>

            {/* Weather Details Section */}
            <div className="weather-details">
              {/* Temperature */}
              <div className="weather-item">
                <img 
                  src="https://img.icons8.com/color/48/000000/temperature.png" 
                  alt="Temperature Icon"
                  className="weather-icon" 
                />
                <p>Temperature: {temperature}°C</p>
              </div>

              {/* Humidity */}
              <div className="weather-item">
                <img 
                  src="https://img.icons8.com/color/48/000000/humidity.png" 
                  alt="Humidity Icon"
                  className="weather-icon" 
                />
                <p>Humidity: {humidity}%</p>
              </div>

              {/* Wind Speed */}
              <div className="weather-item">
                <img 
                  src="https://img.icons8.com/color/48/000000/wind.png" 
                  alt="Wind Speed Icon"
                  className="weather-icon" 
                />
                <p>Wind Speed: {windSpeed} km/h</p>
              </div>

              {/* Weather Condition */}
              <div className="weather-item">
                <img 
                  src={weatherIconUrl} 
                  alt="Weather Condition Icon"
                  className="weather-icon" 
                />
                <p>Weather: {description}</p>
              </div>
            </div>
          </>
        ) : (
          // Message displayed if no weather data is available
          <p>Please search for a city to see the weather details.</p>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
