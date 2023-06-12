import React, { useState, useEffect } from 'react';
import HackCreator from './HackCreator';

// Remove this if/when move Drop Down

const MainDisplay = () => {
  const [hacks, setHack] = useState([]);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    event.preventDefault();

    setValue(event.target.value); // should 'targe' be 'target'?
    console.log(event.target.value);
  };

  const hackItems = [];
  

  async function getHacks() {
    try {
      const response = await fetch(`/api/${value}`);
      const data = await response.json();
      console.log(data);
      // setHack(data);
    } catch (err) {
      console.log(err);
    }
  }
  getHacks();

  // useEffect(() => {
  //   fetch(`/${category}`)
  //     .then((response) => response.json())
  //     .then((data) => setHack(data));
  // }, [category]);

  // for (let i = 0; i < hacks.length; i++) {
  //   hackItems.push(<Hack hacks={hacks[i]} />);
  // }

  const CatSelector = () => {
    return (
      <label>
        Choose a category:
        <select value={value} onChange={handleChange} className="categories">
          <option value="Categories">Categories</option>
          <option value="Codesmith">Codesmith</option>
          <option value="Time">Time</option>
          <option value="Money">Money</option>
        </select>
      </label>
    );
  };

  return (
    <>
      <div className="catselector">
        <CatSelector />
      </div>
      <div>{hackItems}</div>
    </>
  );
};

export default MainDisplay;
