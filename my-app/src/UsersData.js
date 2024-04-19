// Dummy user data, structured similar to Firebase's user data format.
export const users = [
  {
    id: "1",
    username: "johnDoe",
    password: "123456", // Note: Storing passwords like this is insecure. Use hashed passwords in real applications.
    profile: {
      name: "John Doe",
      email: "john@example.com",
      jobTitle: "Software Engineer",
      location: "Remote"
    }
  },
  {
    id: "2",
    username: "janeDoe",
    password: "password",
    profile: {
      name: "Jane Doe",
      email: "jane@example.com",
      jobTitle: "Data Analyst",
      location: "New York"
    }
  }
];


// Function to authenticate a user
export const authenticateUser = (username, password) => {
  const user = users.find(u => u.username === username && u.password === password);
  return user ? user.profile : null;  // Returns profile if found, otherwise null
};