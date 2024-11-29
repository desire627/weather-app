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
 

  // Define a mapping between the weather description and the static icons
  const iconMapping = {
    sunny: "https://img.icons8.com/color/48/000000/sun--v1.png",
    windy: "https://img.icons8.com/color/48/000000/wind.png",
    cloudy: "https://img.icons8.com/color/48/000000/cloud.png",
    snowy: "https://img.icons8.com/color/48/000000/snow.png",
    rainy: "https://img.icons8.com/color/48/000000/rain.png",
  };

  // Map the weather description to one of the static icons
  let weatherIconUrl = iconMapping.sunny; // Default to sunny icon

  if (description.includes('cloud')) {
    weatherIconUrl = iconMapping.cloudy;
  } else if (description.includes('rain')) {
    weatherIconUrl = iconMapping.rainy;
  } else if (description.includes('snow')) {
    weatherIconUrl = iconMapping.snowy;
  } else if (description.includes('wind')) {
    weatherIconUrl = iconMapping.windy;
  }

  // Modify description to match the required names (sunny, windy, cloudy, snowy, rainy)
  let updatedDescription = 'Sunny'; // Default description

  if (description.includes('cloud')) {
    updatedDescription = 'Cloudy';
  } else if (description.includes('rain')) {
    updatedDescription = 'Rainy';
  } else if (description.includes('snow')) {
    updatedDescription = 'Snowy';
  } else if (description.includes('wind')) {
    updatedDescription = 'Windy';
  }

  return (
    <div className="main-card">
      {/* Weather Information Card */}
      <div className="weather-card">
        {weather ? (
          <>
            {/* Weather Header Section */}
            <div className="weather-header">
              <h2>{cityName}, {country}</h2>
              <img src={weatherIconUrl} alt={updatedDescription} className="weather-icon" />
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

              {/* Weather Condition (Updated to use static icons based on description) */}
              <div className="weather-item">
                <img 
                  src={weatherIconUrl}  // Use the mapped static weather icon here
                  alt="Weather Condition Icon"
                  className="weather-icon" 
                />
                <p>Weather: {updatedDescription}</p>
              </div>
            </div>
          </>
        ) : (
          <p>Please search for a city to see the weather details.</p>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
