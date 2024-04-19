import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import JobsPage from './pages/JobsPage';
import RegisterPage from './pages/SignUp';
import SignInPage from './pages/SignIn';

function AppContent() {
  const location = useLocation();

  // Correct the path check for hiding the SearchBar
  const showSearchBar = !['/register', '/signin', '/contact-us', '/brands', '/blog'].includes(location.pathname);

  return (
    <div className="App">
      <Navbar />
      {showSearchBar && <SearchBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

// Wrap AppContent inside Router to use useLocation
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
