
import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }  
  
  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor='name' >Enter your name:</label>
        <input id='name' type='text' onChange={handleChange}  />
        {name && <p>Hello {name}!</p>}
    </div>
  )
}

export default App
