import React from 'react';

function SearchBar({ city, setCity, onSearch }) {
  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
