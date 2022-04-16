import React, { useState } from 'react';
// useState - function

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState('Random Title');

  const handleClick = () => {
    fetch('https://random-word-api.herokuapp.com/word')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
      })
      .then((response) => {
        setText(response[0]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
