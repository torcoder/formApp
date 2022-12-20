import React from 'react';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <p>Please click to return to the homepage</p>
      <button onClick={goHome}>Back Home</button>
    </div>
  );
};

export default NotFound;
