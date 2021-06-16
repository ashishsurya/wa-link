import React, { useState,useRef } from 'react';

const InputContainer = ({ data }) => {
  const [num, setNum] = useState('')
  const url = `https://wa.me/+91${num}`


  const validateNum = (phNo) => {
    if (phNo.length === 10) {
      return true
    } else {
      return false
    }
  }

  
  return (
    <div style={{marginTop:'20px'}}>
      <form>
        <input type="text" value={num} onChange={e => setNum(e.target.value)} />
      </form >
      <a style={{marginTop:'20px'}} href={url} target="blank" className={(validateNum(num))? null : `disbaled`}>Click here</a>
    </div>
  );
};

export default InputContainer;
