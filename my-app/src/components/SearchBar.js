import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

function SearchBar() {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleLocationChange = async (event) => {
    const value = event.target.value;
    setLocation(value);
    if (value.length > 2) {
      try {
        const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
          params: {
            key: 'da388c2b27524fe4a3a9664d6ba812d1',
            q: value,
            pretty: 1,
            no_annotations: 1
          }
        });
        setSuggestions(response.data.results.map(result => ({
          label: result.formatted,
          coords: { lat: result.geometry.lat, lng: result.geometry.lng }
        })));
      } catch (error) {
        console.error('Failed to fetch locations:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const selectLocation = (suggestion) => {
    setLocation('');
    setSuggestions([]);
    setSelectedLocations(prev => [...prev, suggestion]);
  };

  const removeLocation = (index) => {
    setSelectedLocations(prev => prev.filter((_, idx) => idx !== index));
  };

  const clearAll = () => {
    // Reset all state and navigate to clear URL search parameters
    setJobTitle('');
    setLocation('');
    setSelectedLocations([]);
    setSuggestions([]);
    navigate('/jobs');  // This navigates to the jobs route without any query parameters
  };

  const handleSearch = () => {
    navigate(`/jobs?title=${encodeURIComponent(jobTitle)}&locations=${selectedLocations.map(loc => encodeURIComponent(loc.label)).join(',')}`);
  };

  return (
    <div className="search-container">
      <form onSubmit={(e) => e.preventDefault()} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Job title, Keyword, Field"
          value={jobTitle}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="search-input"
          placeholder="Type to search for a location"
          value={location}
          onChange={handleLocationChange}
        />
        <ul className="autocomplete-dropdown">
          {suggestions.map(suggestion => (
            <li
              key={suggestion.label}
              onClick={() => selectLocation(suggestion)}
              className="suggestion-item"
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
        <div className='searchbtns'>
          <button type="button" onClick={handleSearch} className="search-button">
            Search
          </button>
          <button type="button" onClick={clearAll} className="clear-button">
            <span style={{fontWeight: 'bold'}} className="material-icons">clear</span> {/* Using Material Icons as text */}
          </button>
        </div>
      </form>
      <div className="breadcrumb-container">
        {selectedLocations.map((location, index) => (
          <div key={index} className="breadcrumb">
            {location.label}
            <button onClick={() => removeLocation(index)} className="remove-breadcrumb">
              <span className="material-icons">close</span> {/* Using Material Icons as text for close */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
