import React, { useState, useEffect } from 'react';
import { auth } from '../../../index';
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import "./ResetPassword.css";

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isValidCode, setIsValidCode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    
    // Get oobCode from URL
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const oobCode = query.get('oobCode');

    useEffect(() => {
        // If there's no oobCode, we don't even need to verify - redirect immediately
        if (!oobCode) {
            setIsLoading(false);
            return;
        }

        // Verify the code when component mounts
        verifyPasswordResetCode(auth, oobCode)
            .then(() => {
                setIsValidCode(true);
                setIsLoading(false);
            })
            .catch((error) => {
                setError('Invalid or expired reset link');
                setIsValidCode(false);
                setIsLoading(false);
            });
    }, [oobCode]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!oobCode || !isValidCode) {
            setError('Invalid reset link');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            await confirmPasswordReset(auth, oobCode, newPassword);
            setSuccess('Password reset successful!');
            setError('');
            // Redirect to login after successful reset
            setTimeout(() => navigate('/login'), 3000);
        } catch (err: any) {
            setError(err.message);
            setSuccess('');
        }
    };

    // Show loading state while verifying the code
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Redirect to login if there's no code or code is invalid
    if (!oobCode || !isValidCode) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div>
            <h1>Reset Password</h1>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="newPassword">New Password:</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                
                <button type="submit">Reset Password</button>
                <button type="button" onClick={() => navigate('/login')}>
                    Back to Login
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;