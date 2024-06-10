import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Authentication logic here
    if ((username === 'user1' && password === 'user1') ||
        (username === 'user2' && password === 'user2') ||
        (username === 'user3' && password === 'user3') ||
        (username === 'user4' && password === 'user4') ||
        (username === 'admin' && password === 'admin')) {
      navigate('/landing', { state: { username } });
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <h1 className="title">ByteBeat</h1>
      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
