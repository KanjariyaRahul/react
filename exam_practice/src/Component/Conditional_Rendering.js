import React, { useState } from 'react';

function Conditional_Rendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className='container  bg-primary text-white mt-2 rounded '>
    <h3 className='text-center'>Example of Conditional Rendering</h3>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, User!</h1>
          <button onClick={handleLogout} className='btn btn-warning mb-3'>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please Login</h1>
          <button onClick={handleLogin} className='btn btn-success mb-3'>Login</button>
        </div>
      )}

      
    </div>
  );
}

export default Conditional_Rendering;
