import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleResetPassword = async () => {
        try {
            const response = await axios.post('https://your-backend.com/forgot-password', { email });
            setMessage('Please check your email for reset instructions.');
        } catch (error) {
            setMessage('Failed to send reset email. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card my-5">
                        <div className="card-body">
                            <h2 className="card-title text-center">Reset Your Password</h2>
                            <form onSubmit={(e) => { e.preventDefault(); handleResetPassword(); }}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Send Reset Email</button>
                                </div>
                            </form>
                            {message && <div className="alert alert-info mt-2">{message}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
