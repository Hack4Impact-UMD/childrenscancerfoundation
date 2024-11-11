import React, { useState } from 'react';
import { auth } from '../../../index';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import "./ForgotPassword.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email, {
                url: `${window.location.origin}/reset-password`,
                handleCodeInApp: true,
            });
            setSuccess('Check your email for password reset link');
            setError('');
            // Redirect to login after a delay
            setTimeout(() => navigate('/login'), 3000);
        } catch (err: any) {
            setError(err.message);
            setSuccess('');
        }
    };

    return (
        <div>
            <h1>Forgot Password</h1>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                
                <button type="submit">Send Reset Link</button>
                <button type="button" onClick={() => navigate('/login')}>
                    Back to Login
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;