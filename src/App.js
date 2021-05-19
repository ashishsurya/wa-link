import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [num, setNum] = useState('');
  const url = `https://wa.me/+91${num}`;
  return (
    <>
      {num.length !== 10 ? (
        <p class="message">Please Enter a valid Phone Number</p>
      ) : null}
    <div className='app'>
      
      <header>Provide a Number and Chat with them on What's App.</header>
      <input value={num} type='text' onChange={(e) => setNum(e.target.value)} />
      <a target='blank' href={url}>
        Click here to Message
      </a>
      </div>
      </>
  );
};

export default App;
