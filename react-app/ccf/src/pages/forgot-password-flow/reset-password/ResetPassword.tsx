import React, { useState, useEffect } from 'react';
import { auth } from '../../../index';
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import { useNavigate, useLocation, Navigate, Link } from 'react-router-dom';
import logo from '../../../assets/ccf-logo.png';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isValidCode, setIsValidCode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    // Password requirements states
    const [specialChar, setSpecialChar] = useState(false);
    const [capitalLetter, setCapitalLetter] = useState(false);
    const [number, setNumber] = useState(false);
    const [minLength, setMinLength] = useState(false);
    const [showReqs, setShowReqs] = useState(false);
    const [pwdUnmatched, setPwdUnmatched] = useState(false);
    
    const navigate = useNavigate();
    
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const oobCode = query.get('oobCode');

    useEffect(() => {
        if (!oobCode) {
            setIsLoading(false);
            return;
        }

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

    const checkPasswordRequirements = (password: string) => {
        setSpecialChar(/[\W_]/.test(password));
        setCapitalLetter(/[A-Z]/.test(password));
        setNumber(/[0-9]/.test(password));
        setMinLength(password.length >= 6);
    };

    const checkConfirmPwd = () => {
        if (confirmPassword !== "") {
            confirmPassword === newPassword ? setPwdUnmatched(false) : setPwdUnmatched(true);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!oobCode || !isValidCode) {
            setError('Invalid reset link');
            return;
        }

        if (!specialChar || !capitalLetter || !number || !minLength || pwdUnmatched) {
            setError('Please ensure all password requirements are met');
            return;
        }

        try {
            await confirmPasswordReset(auth, oobCode, newPassword);
            setSuccess('Password reset successful! Redirecting to login...');
            setError('');
            setTimeout(() => navigate('/login'), 3000);
        } catch (err: any) {
            setError(err.message);
            setSuccess('');
        }
    };

    if (isLoading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    if (!oobCode || !isValidCode) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="box2">
            <div className="left-container2">
                <div className="content2">
                    <div className="header-container2">
                        <img
                            src={logo}
                            className="logo2"
                            alt="CCF Logo"
                        />
                        <h1 className="header2">Set New Password</h1>
                    </div>

                    <form className="form-container2" onSubmit={handleSubmit}>
                        {error && <p className="validation">{error}</p>}
                        {success && <p className="text-green-600 text-center mb-4">{success}</p>}
                        
                        <label>New Password*</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            required
                            value={newPassword}
                            onChange={(e) => {
                                setNewPassword(e.target.value);
                                checkPasswordRequirements(e.target.value);
                            }}
                            onFocus={() => setShowReqs(true)}
                            onBlur={() => setShowReqs(false)}
                            onKeyUp={checkConfirmPwd}
                            className="input"
                        />

                        {showReqs && (
                            <div className="pwd-reqs">
                                <p>Password requires:</p>
                                <label id="checkbox">
                                    <input
                                        type="checkbox"
                                        checked={minLength}
                                        readOnly
                                    />
                                    Minimum 6 characters
                                </label>
                                <label id="checkbox">
                                    <input
                                        type="checkbox"
                                        checked={specialChar}
                                        readOnly
                                    />
                                    One special character
                                </label>
                                <label id="checkbox">
                                    <input
                                        type="checkbox"
                                        checked={capitalLetter}
                                        readOnly
                                    />
                                    One capital letter
                                </label>
                                <label id="checkbox">
                                    <input
                                        type="checkbox"
                                        checked={number}
                                        readOnly
                                    />
                                    One number
                                </label>
                            </div>
                        )}

                        {((!specialChar || !number || !capitalLetter || !minLength) && newPassword && !showReqs) && (
                            <p className="validation">At least one password requirement was not met</p>
                        )}

                        <label>Confirm Password*</label>
                        <div className={!pwdUnmatched ? "confirm-pwd-container" : "confirm-pwd-container-exclaim"}>
                            <input
                                type="password"
                                placeholder="Enter password again"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onKeyUp={checkConfirmPwd}
                                className="input"
                            />
                            {pwdUnmatched && <p id="exclaim">!</p>}
                        </div>

                        {pwdUnmatched && (
                            <p className="validation">Passwords do not match</p>
                        )}

                        <button
                            type="submit"
                            className={
                                !newPassword ||
                                !confirmPassword ||
                                !specialChar ||
                                !capitalLetter ||
                                !number ||
                                !minLength ||
                                pwdUnmatched
                                    ? "disable-submit"
                                    : "signup-btn2"
                            }
                            disabled={
                                !newPassword ||
                                !confirmPassword ||
                                !specialChar ||
                                !capitalLetter ||
                                !number ||
                                !minLength ||
                                pwdUnmatched
                            }
                        >
                            Reset your password
                        </button>
                        
                        <p className="acc-req2">
                            <Link to="/login" className="text-blue-600">
                                Back to Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

            <div className="right-container2">
                <div className="image-placeholder2"></div>
            </div>
        </div>
    );
};

export default ResetPassword;