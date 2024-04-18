import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';  // Ensure this path matches your file structure
import SearchBar from './pages/SearchBar'; // Assuming SearchBar is saved in the components folder
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import JobsPage from './pages/JobsPage';

import { dummyData } from './Data';

function App() {
  const handleSearch = (searchQuery) => {
    console.log(`Search initiated for: ${searchQuery}`);
    // Implement actual search functionality here
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <SearchBar onSearch={handleSearch} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/jobs" element={<JobsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
