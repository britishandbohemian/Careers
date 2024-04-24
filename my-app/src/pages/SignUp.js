import React, { useState, useContext } from 'react'; // Import useContext
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Correct import of AuthContext

function RegisterPage() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext); // Correctly use useContext to access AuthContext
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        // Assume authentication success for demonstration
        login(); // Update login state on successful signup
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        navigate('/jobs');
    };

    const goBack = () => navigate(-1);

    const handlePasswordChange = (e) => {
        const pwd = e.target.value;
        setPassword(pwd);
        updatePasswordStrength(pwd);
    };

    const updatePasswordStrength = (password) => {
        const strength = getPasswordStrength(password);
        setPasswordStrength(strength);
    };

    const getPasswordStrength = (password) => {
        let strength = 0;
        if (password.length > 5) strength += 1;
        if (password.match(/[a-z]+/)) strength += 1;
        if (password.match(/[A-Z]+/)) strength += 1;
        if (password.match(/[0-9]+/)) strength += 1;
        if (password.match(/[\W]+/)) strength += 1;
        return strength;
    };

    return (
        <div className="signup-container mt-5 mb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <button onClick={goBack} className="btn btn-light">
                                    <i className="material-icons">arrow_back</i>
                                </button>
                                <h5 style={{width:'25%'}}>Register</h5>
                                <span></span> {/* Placeholder for alignment */}
                            </div>
                            <div className="card-body">
                                {error && <div className="alert alert-danger">{error}</div>}
                                <form onSubmit={handleSignUp}>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} required />
                                        <div className="progress my-2">
                                            <div className={`progress-bar ${getProgressBarColor(passwordStrength)}`} role="progressbar" style={{ width: `${passwordStrength * 20}%` }}></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Helper function to determine progress bar color based on password strength
const getProgressBarColor = (strength) => {
    if (strength < 2) return 'bg-danger';
    else if (strength < 4) return 'bg-warning';
    else return 'bg-success';
};

export default RegisterPage;
