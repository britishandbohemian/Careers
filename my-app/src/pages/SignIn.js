import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Ensure the path is correct
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link as MuiLink } from '@mui/material'; // Import MUI Link component for styling consistency

import './SignInSignUp.css';

function SignInPage() {
  const { setIsLoggedIn, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      const profile = await authenticateUser(username, password); // Make sure to await here
      if (profile) {
        setIsLoggedIn(true);
        navigate('/jobs'); // Navigate to the jobs page
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      setError(error.message); // Display any error during sign in
    }
  };

  return (
    <div className="signin-container">
      <Card sx={{ maxWidth: 300, m: 'auto', mt: 4 }}> {/* Center and margin top the Card component */}
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Sign In
          </Typography>
          {error && (
            <Stack sx={{ mb: 2 }}>
              <Alert severity="error">{error}</Alert>
            </Stack>
          )}
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSignIn} fullWidth sx={{ mt: 2 }}>
            Sign In
          </Button>
        </CardContent>
        <Stack direction="column" spacing={1} sx={{ mt: 2, mb: 2, alignItems: 'center' }}>
          <MuiLink component={Link} to="/register" underline="hover">
            Register Here
          </MuiLink>
          <MuiLink component={Link} to="/forgot-password" underline="hover">
            Forgot Username and Password?
          </MuiLink>
        </Stack>
      </Card>
    </div>
  );
}

export default SignInPage;
