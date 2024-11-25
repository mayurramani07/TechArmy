import React from "react";
import "./LoginPage.css";

const LoginPage = ({ onNavigateToSignUp }) => {
  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form id="signin-form">
        <label htmlFor="signin-username">Username or Email</label>
        <input
          type="text"
          id="signin-username"
          name="username"
          placeholder="Enter your username or email"
          required
        />

        <label htmlFor="signin-password">Password</label>
        <input
          type="password"
          id="signin-password"
          name="password"
          placeholder="Enter your password"
          required
        />

        <button type="submit" id="signin-btn">
          Sign In
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <button className="signup-link" onClick={onNavigateToSignUp}>
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default LoginPage;
