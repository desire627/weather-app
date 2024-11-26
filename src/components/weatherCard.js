import React from 'react';
import './WeatherCard.css'; // Add a CSS file for styling

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return null; // Return nothing if no weather data
  }

  return (
    <div className="weather-card">
      <h2>{weather.location.name}, {weather.location.country}</h2>
      <p>Temperature: {weather.current.temperature}°C</p>
      <p>Weather: {weather.current.weather_descriptions[0]}</p>
      <p>Humidity: {weather.current.humidity}%</p>
      <p>Wind Speed: {weather.current.wind_speed} km/h</p>
    </div>
  );
};

export default WeatherCard;
