import React from 'react';

const SearchBar = ({ city, setCity, onSearch }) => {
  return (
    <div className="search-bar-container">
      {/* Search Bar Section */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter City Name *"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="search-input"
        />
        <button className="search-button" onClick={onSearch}>
          <i className="fas fa-search"></i> Search
        </button>
      </div>

      {/* Weather Condition Icons */}
      <div className="static-icons">
        <img
          src="https://img.icons8.com/color/48/000000/sun--v1.png"
          alt="Sunny"
          className="bottom-icon"
        />
        <img
          src="https://img.icons8.com/color/48/000000/cloud.png"
          alt="Cloudy"
          className="bottom-icon"
        />
        <img
          src="https://img.icons8.com/color/48/000000/rain.png"
          alt="Rainy"
          className="bottom-icon"
        />
        <img
          src="https://img.icons8.com/color/48/000000/storm.png"
          alt="Thunderstorm"
          className="bottom-icon"
        />
        <img
          src="https://img.icons8.com/color/48/000000/snow.png"
          alt="Snowy"
          className="bottom-icon"
        />
      </div>
    </div>
  );
};

export default SearchBar;
