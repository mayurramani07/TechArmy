import React from "react";
import "./SignUpForm.css"; 

const SignUpForm = ({ onNavigateToLogin }) => {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form id="signup-form">
        <label htmlFor="signup-username">Username</label>
        <input
          type="text"
          id="signup-username"
          name="username"
          placeholder="Enter your username"
          required
        />

        <label htmlFor="signup-email">Email Address</label>
        <input
          type="email"
          id="signup-email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="signup-password">Password</label>
        <input
          type="password"
          id="signup-password"
          name="password"
          placeholder="Enter your password"
          required
        />

        <label htmlFor="signup-confirm-password">Confirm Password</label>
        <input
          type="password"
          id="signup-confirm-password"
          name="confirm-password"
          placeholder="Confirm your password"
          required
        />

        <button type="submit" id="signup-btn">
          Sign Up
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <button className="login-link" onClick={onNavigateToLogin}>
          Login
        </button>
      </p>
    </div>
  );
};

export default SignUpForm;
