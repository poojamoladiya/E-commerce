import React, { useState } from 'react';
import '../Styles/Login.css'

function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (username === '' || password === '') {
      setError('Both fields are required');
    } else {
      setError('');
   
      alert(`Logged in with username: ${username}`);
    }

       const handleSubmit= ()=>{
        alert('susscess')
       }
  
  };

  return (
    <div className="login">
      <div className="loginpage">
        <h2>Login Page</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className='mt-3' onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;






