import React from 'react';
import PropTypes from 'prop-types';

const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return <p>No weather data available. Please search for a city.</p>;
  }

  const { current } = weather;
  if (!current) {
    return <p>Weather data is invalid. Please try again.</p>;
  }

  return (
    <div>
      <h2>Temperature: {current.temperature}°C</h2>
      <p>Condition: {current.weather_descriptions[0]}</p>
    </div>
  );
};

WeatherDisplay.propTypes = {
  weather: PropTypes.object,
};

export default WeatherDisplay;
