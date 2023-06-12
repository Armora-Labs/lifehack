import React, { useState, useEffect } from 'react';
import HackCreator from './HackCreator';

// Remove this if/when move Drop Down

const MainDisplay = () => {
  const [hacks, setHack] = useState([]);
  const [value, setValue] = useState('');

  //How do we get this handleChange info to MainDisplay? Move drop down to MainDisplay

  const handleChange = (event) => {
    event.preventDefault();

    setValue(event.target.value); // should 'targe' be 'target'?
    console.log(event.target.value);
  };

  const hackItems = [];
  console.log(hackItems);

  // Currently set up to rerender each time fetch is made
  const category = JSON.stringify({ value });

  useEffect(() => {
    async function getHacks() {
      try {
        const response = await fetch('/');
        const data = await response.json();
        setHack(data);
      } catch (err) {
        console.log(err);
      }
    }
    getHacks();
  }, []);

  // useEffect(() => {
  //   fetch('/${category}')
  //     .then((response) => response.json())
  //     .then((data) => setHack(data));
  // }, [category]);

  for (let i = 0; i < hacks.length; i++) {
    hackItems.push(<Hack hacks={hacks[i]} />);
  }



  return (
    <>
      <div>
        <label>
          <select value={value} onChange={handleChange} className="categories">
            <option value="Categories">Categories</option>
            <option value="Codesmith">Codesmith</option>
            <option value="Time">Time</option>
            <option value="Money">Money</option>
          </select>
        </label>
      </div>
      <div>{hackItems}</div>
    </>
  );
};

export default MainDisplay;

// useEffect(() => {
//   async function getHacks() {
//     try {
//       const response = await fetch('/', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//         body: JSON.stringify(postData),
//       })
//       const data = await response.json()
//       setHack(data);
//     }
//     catch (err) { console.log(err)}
//   }
//   getHacks();
// })
