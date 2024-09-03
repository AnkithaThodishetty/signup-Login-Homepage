
        
import React, { useState } from 'react';
import './Signup.css'; 

function Signup() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const validatePassword = (password) => {
   
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;
    return regex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'password') {
      if (value.length > 8) {
        setError('Password cannot exceed 8 characters');
      } else if (!validatePassword(value)) {
        setError('Password must be exactly 8 characters with at least one letter, one number, and one special character');
      } else {
        setError('');
      }
    } else {
      setError('');
    }

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password.length !== 8 || !validatePassword(user.password)) {
      setError('Password must be exactly 8 characters with at least one letter, one number, and one special character');
    } else {
      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = '/login'; 
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image-side">
        <img src="https://th.bing.com/th/id/OIP.Cd4VwdL7_Qy5BKFgyDOmWAHaD4?w=339&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Background" />
      </div>
      <div className="signup-content">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <label>Name:</label>
          <input name="name" placeholder="Your name" onChange={handleChange} required />
          <label>Email address:</label>
          <input type="email" name="email" placeholder="Email address" onChange={handleChange} required />
          <label>Password:</label>
          <input type="password" name="password" placeholder="Password" maxLength="8" onChange={handleChange} required />
          {error && <p className="error-message">{error}</p>}
          <div className="form-actions">
            <button type="submit">Create Account</button>
            <p className="login-link">Already have an account? <a href="/login">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
