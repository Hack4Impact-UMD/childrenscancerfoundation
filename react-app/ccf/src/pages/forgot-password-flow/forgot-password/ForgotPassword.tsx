import React, { useState, useEffect } from 'react';
import { auth } from '../../../index';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import DrHanleyLabImage from "../../../assets/Dr. Hanley Lab 1.png";
import toretsky from "../../../assets/toretskywithpatient 1.png";
import yellowOverlay from "../../../assets/yellowoverlay.png";
import "./ForgotPassword.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isWideScreen, setIsWideScreen] = useState<boolean>(window.innerWidth > 750);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 750);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedEmail = email.toLowerCase().trim();

        if (!validateEmail(trimmedEmail)) {
            setError('Please enter a valid email address.');
            return;
        }

        try {
            await sendPasswordResetEmail(auth, trimmedEmail, {
                url: `${window.location.origin}/reset-password`,
                handleCodeInApp: true,
            });
            setSuccess('Check your email for password reset link');
            setError('');
            setTimeout(() => navigate('/login'), 3000);
        } catch (err: any) {
            setError(err.message);
            setSuccess('');
        }
    };

    return (
        <div className="container">
            <div className="content">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="logo">
                        <img src="/ccflogo.png" alt="Logo" className="logoImage" />
                    </div>
                    <h1 className="heading">Forgot Password?</h1>
                    <p>We'll send you reset instructions.</p>

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="input"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}

                    <button type="submit" className="button">
                        Reset your password
                    </button>

                    <div className="loginText">
                        <Link to="/login">
                            <u>Back to log in</u>
                        </Link>
                    </div>
                </form>

                {isWideScreen && (
                    <div className="imageContainer">
                        <img src={DrHanleyLabImage} alt="image" className="images" />
                        <img src={toretsky} alt="image" className="images" />
                        <div className="yellowOverlay">
                            <img src={yellowOverlay} alt="overlay" className="yellow" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;