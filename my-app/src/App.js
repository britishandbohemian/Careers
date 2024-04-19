import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the path to where Navbar is saved
import SearchBar from './components/SearchBar'; // Ensure this path matches where SearchBar is saved
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import JobsPage from './pages/JobsPage';
import JobDetail from './pages/JobDetail'; // Assuming you have a separate JobDetail page for individual job view

function App() {
  const handleSearch = (searchQuery) => {
    console.log(`Search initiated for: ${searchQuery}`);
    // Placeholder for search functionality
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
            <Route path="/jobs/:id" element={<JobDetail />} />  {/* Adding a route for job details */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
