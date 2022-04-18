import React, { useState, useEffect } from 'react';
import { useSprings, config, animated } from 'react-spring';
// useState - function

const UseStateBasics = (props) => {
  // const [words, setWords] = useState(['random', 'words', 'generator']);
  // const [wordCache, setWordCache] = useState(['tacit']);

  // const fetchRandomWordBatch = async (size) => {
  //   return fetch(`https://random-word-api.herokuapp.com/word/?number=${size}`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const fillWords = () => {
  //   fetchRandomWordBatch(30)
  //     .then((wordArr) => {
  //       setWordCache([...wordArr]);
  //     })
  //     .then(() => {
  //       setWords([...words, ...wordCache]);
  //     });
  // };

  // useEffect(() => {
  //   setWords(words.slice(1));
  // };
  //   if (words.length < 6) {
  //     fillWords();
  //   }
  // }, [words]);

  // const handleClick = () => {

  const [wordsCache, setWordsCache] = useState([
    'random',
    'words',
    'generator',
    'tacit',
    'leakproof',
    'intercooler',
    'belched',
    'uprousing',
    'plectra',
    'overcomers',
    'clotted',
    'sisals',
    'repartees',
    'spinals',
    'alp',
    'unmanning',
    'modernisation',
    'ribozyme',
    'titanesses',
    'feverworts',
    'lotting',
    'unlevels',
    'offcast',
    'centigrams',
    'owns',
    'understatedly',
    'acromion',
    'ribbers',
    'synching',
    'letching',
    'lulls',
    'usualness',
    'ptomainic',
    'oncoming',
  ]);

  const [index] = useSprings({
    from: { val: 0 },d
    to: { val: wordsCache.length - 1 },
    delay: 200,
    config: config.default,
  });

  return (
    <>
      <h2>
        <animated.div>
          {/* {wordsCache[parseInt(index.val.to((val) => Math.floor(val)))]} */}
          {/* {index.val.to((val) => Math.floor(val))} */}
        </animated.div>
      </h2>
      {/* <button type='button' className='btn' onClick={handleClick}>
        <span>{`Turn Generator ${status}`}</span>
        <span className='generator-toggle'></span>
      </button> */}
      <input type='range' />
    </>
  );
};

export default UseStateBasics;
