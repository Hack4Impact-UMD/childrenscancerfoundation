import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../users/auth_login";
import "./login.css";
import Button from "../../components/buttons/Button"

function Login() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const email = input.email.toLowerCase().trim();
    const password = input.password;
    if(validateEmail(email) === false){
      setError("Please enter a valid email address.")
    }else{
    const { error: loginError } = await loginUser(email, password);
    if (loginError) setError(loginError);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="logo">
          <img src="/ccflogo.png" alt="Logo" className="logoImage" />
        </div>
        <h1 className="heading">Welcome!</h1>
        <p>
          New to Children’s Cancer Foundation? <Link to="/signup">Sign Up</Link>
        </p>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="Enter your email"
          type="text"
          onChange={handleChange}
          value={input.email}
          required
          className="input"
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={input.password}
          type="password"
          required
          className="input"
        />
        <div className="rememberMe">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember"> Remember me for 30 days</label>
        </div>
        {error && <p className="error">{error}</p>}
        <Button
          variant="red"
          width="425px"
          height="50px"
          borderRadius="25px"
          type="submit"
          onClick={() => {}} // The form's onSubmit handler will handle the submission
        >
          Log in
        </Button>
        <Link to="/forgot-password" className="forgotPasswordLink">Forgot password?</Link>
      </form>
    </div>
  );
}

export default Login;
