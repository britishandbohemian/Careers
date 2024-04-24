import React, { createContext, useState } from 'react';
import { authenticateUser } from '../UserFunctions'; // Assuming userFunctions.js contains your authenticateUser

export const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  authenticateUser: () => {}
});

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    console.log("User logged in");
    setIsLoggedIn(true);
  };

  const logout = () => {
    console.log("User logged out");
    setIsLoggedIn(false);
  };

  // Pass the authenticateUser function along with other values in the context
  const value = {
    isLoggedIn,
    setIsLoggedIn,
    authenticateUser, // Now available through AuthContext
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
