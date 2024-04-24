import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './SignInSignUp.css';

function SignInPage() {
    const { setIsLoggedIn, authenticateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        const profile = authenticateUser(username, password);
        if (profile) {
            console.log("Login successful, navigating to jobs page.");
            setIsLoggedIn(true);
            navigate('/jobs');  // Navigate to jobs page on successful login
        } else {
            console.log("Login failed, invalid credentials.");
            setError('Invalid credentials');  // Set error message if authentication fails
        }
    };

    return (
        <div className="signin-container ">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <h5 className="card-header">Sign In</h5>
                            <div className="card-body">
                                {error && <div className="alert alert-danger">{error}</div>}
                                <form onSubmit={handleSignIn}>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                </form>
                                <div className="mt-4">
                                    <Link to="/register" className="btn btn-link">Dont have an account? Sign Up here!</Link>
                                    <Link to="/forgot-password" className="btn btn-link">Forgot Username and Password?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;
