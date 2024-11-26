import React, { useState } from 'react';
import SearchBar from './components/searchBar';
import WeatherCard from './components/weatherCard';
import ErrorMessage from './components/ErrorMessage';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a valid city name.');
      setWeather(null);
      return;
    }

    const apiKey = '5ed8b884470c33b2d7c969ae0a9f6871';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      setError(''); // Clear previous errors
      const response = await axios.get(url);

      if (response.data.cod !== 200) {
        throw new Error(response.data.message || 'City not found or API error');
      }

      setWeather(response.data); // Update weather data
    } catch (err) {
      setWeather(null);
      setError(err.message || 'City not found or API error');
    }
  };

  return (
    <div className="App">
      <div className="app-container">
        <h1>Weather App</h1>
        <SearchBar city={city} setCity={setCity} onSearch={fetchWeather} />
        <ErrorMessage message={error} />
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
}

export default App;
