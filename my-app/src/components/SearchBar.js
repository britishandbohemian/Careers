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
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const selectLocation = (suggestion) => {
    setSelectedLocations(prev => [...prev, suggestion]);
    setSuggestions([]);
    setLocation('');  // Clear input on selection
  };

  const removeLocation = (index) => {
    setSelectedLocations(prev => prev.filter((_, idx) => idx !== index));
  };

  const clearAll = () => {
    setJobTitle('');
    setLocation('');
    setSelectedLocations([]);
    setSuggestions([]);
    navigate('/jobs');
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
          placeholder="Job title, Company name"
          value={jobTitle}
          onChange={handleInputChange}
        />
        <div className="location-input-container">
          {selectedLocations.map((location, index) => (
            <div key={index} className="breadcrumb">
              {location.label}
              <button onClick={() => removeLocation(index)} className="remove-breadcrumb">
                <span style={{color:'black'}} className="material-icons">close</span>
              </button>
            </div>
          ))}
          <input
            type="text"
            className="search-input"
            placeholder={selectedLocations.length > 0 ? '' : 'Type to search for a location'}
            value={location}
            onChange={handleLocationChange}
          />
          <div className={`autocomplete-dropdown ${suggestions.length > 0 ? 'show' : ''}`}>
            {suggestions.map(suggestion => (
              <li
                key={suggestion.label}
                onClick={() => selectLocation(suggestion)}
                className="suggestion-item"
              >
                {suggestion.label}
              </li>
            ))}
          </div>
        </div>
        <div className='searchbtns'>
          <button type="button" onClick={handleSearch} className="search-button">Search</button>
          <button type="button" onClick={clearAll} className="clear-button">
            <span style={{fontWeight: 'bold'}} className="material-icons">clear</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
