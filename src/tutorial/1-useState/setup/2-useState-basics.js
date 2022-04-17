import React, { useState, useEffect } from 'react';
// useState - function

const UseStateBasics = (props) => {
  const [wordCache, setWordCache] = useState(['Random Title']);

  const fetchRandomWordBatch = async (size) => {
    return fetch(`https://random-word-api.herokuapp.com/word/?number=${size}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log(setWordCache);
    fetchRandomWordBatch(20).then((wordArr) => {
      setWordCache([...wordCache, ...wordArr]);
    });
  }, []);

  useEffect(() => {
    if (wordCache.length < 6) {
      fetchRandomWordBatch(20).then((wordArr) => {
        setWordCache([...wordCache, ...wordArr]);
      });
    }
  }, [wordCache]);

  const handleClick = () => {
    setWordCache(wordCache.slice(1));
  };

  return (
    <>
      <h2>{wordCache[0]}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
