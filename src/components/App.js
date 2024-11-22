
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [userName, setUserName] = useState('');

  const handleChange = (e) => {
    setUserName(e.target.value);
  }  
  
  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor='name' >Enter your name:</label>
        <input id='name' type='text' onChange={handleChange}  />
        {userName && <p>Hello {userName}!</p>}
    </div>
  )
}

export default App
