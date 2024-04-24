// Importing the JSON data from a local file
import userData from './users.json';

// Using the imported data
export const users = userData.users;

// Function to authenticate a user
export const authenticateUser = (username, password) => {
  const user = users.find(u => u.username === username && u.password === password);
  return user ? user.profile : null;  // Returns profile if found, otherwise null
};

// Example usage
console.log(authenticateUser('johnDoe', '123456'));
