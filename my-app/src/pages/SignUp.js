import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import './SignInSignUp.css';
// Reuse the same CSS for consistency

function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Simulate user registration logic
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
      // Here you would typically make an API call to your backend to register the user
      // Since we cannot write to a file, we'll just navigate to the sign-in page
      navigate('/sign-in');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container" style={{marginTop:'6rem'}}>
      <Card sx={{ maxWidth: 300, m: 'auto' }}> {/* Center the Card component */}
        <CardContent>
          <h1 style={{fontSize:'25px'}}>
            Register
          </h1>
          {error && (
            <Stack sx={{ mb: 2 }}>
              <Alert severity="error">{error}</Alert>
            </Stack>
          )}
          <form onSubmit={handleSignUp}>
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default RegisterPage;
