import React, { useEffect, useState } from 'react';
import './App.css';
import InputContainer from './InputContainer';

const App = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json'
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(data);
      });
  }, [data]);

  return (
    <div className='app'>
    <h1>Chat with anyone through Whats'app</h1>
      <InputContainer data = {data}/>
    </div>
  );
};

export default App;
