import React, { createContext, useState } from 'react';
import { users } from '../UsersData'; // Import users directly if path issues are suspected

export const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  authenticateUser: () => {}
});

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const authenticateUser = (username, password) => {
      const user = users.find(u => u.username === username && u.password === password);
      return user ? user.profile : null;
    };

    const value = {
        isLoggedIn,
        setIsLoggedIn,
        authenticateUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
