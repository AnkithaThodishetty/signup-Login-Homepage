import React from 'react';
import './Home.css';

function Home() {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/Signup';
  };

  return (
    <div className="home-container">
      <h1 className='head'>Welcome To spY D Technology</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
