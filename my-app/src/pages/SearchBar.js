import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleInputChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(jobTitle, location);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Job title"
          value={jobTitle}
          onChange={handleInputChange}
        />
        <select
          id="location-input"
          className="search-input"
          value={location}
          onChange={handleLocationChange}
        >
          <option value="">Select a city</option>
          <option value="Lagos">Lagos</option>
          <option value="Cairo">Cairo</option>
          <option value="Kinshasa">Kinshasa</option>
          {/* ... other options */}
          <option value="Cape Town">Cape Town</option>
        </select>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
