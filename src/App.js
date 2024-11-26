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
    const apiKey = '32f19a1b32f18e4daf678d645aa12d51';
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    try {
      setError(''); // Clear previous error
      const response = await axios.get(url);

      if (response.data.error) {
        throw new Error(response.data.error.info);
      }

      setWeather(response.data); 
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
