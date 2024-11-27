import React from 'react';

const SearchBar = ({ city, setCity, onSearch }) => {
  return (
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
  );
};

export default SearchBar;
