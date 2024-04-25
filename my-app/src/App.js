import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import JobsPage from './pages/JobsPage';
import RegisterPage from './pages/SignUp';
import JobDetail from './pages/JobDetail';
import SignInPage from './pages/SignIn';
import Test from './get';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ProfilePage from './pages/ProfilePage';
import BlogPage from './pages/BlogPage';

function AppContent() {
  const location = useLocation(); // Correct use of useLocation inside Router context

  // Define paths where the SearchBar should not be shown
  const hideSearchBarPaths = ['/register', '/signin', '/contact-us', '/brands', '/blog', '/forgot-password', '/profile','/'];
  const showSearchBar = !hideSearchBarPaths.includes(location.pathname);

  return (
    <div className="App">
      <Navbar />
      {showSearchBar && <SearchBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
