import React, { useState } from 'react';
import SearchBar from './components/searchBar';
import WeatherCard from './components/weatherCard';
import ErrorMessage from './components/ErrorMessage';
import axios from 'axios';
import './App.css';
import Map from './components/Map';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [coords, setCoords] = useState(null); // Initially set as null (no coordinates)

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a valid city name.');
      setWeather(null);
      setCoords(null); // Reset coordinates when invalid input
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
      setCoords({
        lat: response.data.coord.lat,
        lon: response.data.coord.lon,
      }); // Set coordinates for the map
    } catch (err) {
      setWeather(null);
      setError(err.message || 'City not found or API error');
      setCoords(null); // Reset coordinates on error
    }
  };

  return (
    <div className="App">
      <div className="app-container">
        {/* Conditionally render the map only if coordinates are available */}
        {coords && (
          <div className="map-container">
            <Map lat={coords.lat} lon={coords.lon} />
          </div>
        )}

        <div className="search-container">
          <SearchBar city={city} setCity={setCity} onSearch={fetchWeather} />
        </div>

        <div className="title-container">
          <h1>Weather1224</h1>
          <p>Discover the weather in your city!</p>
        </div>

        {error && <ErrorMessage message={error} />}
        {/* Pass weather data and display time of weather update */}
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
}

export default App;
