import React, { useState, useEffect } from 'react';
import HackCreator from './HackCreator';
import Hack from './Hack'

// Remove this if/when move Drop Down

const MainDisplay = () => {
  const [hacks, setHack] = useState([]);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    console.log('category has been changed')
    event.preventDefault();

    setValue(event.target.value); // should 'targe' be 'target'?
    console.log(event.target.value);
  };

  async function getHacks() {
    try {
      const response = await fetch(`/api/${value}`);
      const data = await response.json();
      console.log(data);
      setHack(data);
    } catch (err) {
      console.log(err);
    }
  }
  // getHacks();

  useEffect(() => {
    getHacks();
  }, [value])

    
  const hackItems = [];
  for (let i = 0; i < hacks.length; i++) {
    hackItems.push(<Hack hacks={hacks[i]} />);
  }

  console.log('hacks', hacks);
  console.log('hackItems', hackItems);

  const CatSelector = () => {
    return (
      <>
      <label>
        Choose a category:
        <select value={value} onChange={handleChange} className="categories">
          <option value="Categories">Categories</option>
          <option value="Codesmith">Codesmith</option>
          <option value="Time">Time</option>
          <option value="Money">Money</option>
        </select>
      </label>
      <button onClick={() => console.log(hacks)}>show hacks</button>
      </>
    );
  };

  return (
    <>
      <div className="catselector">
        <CatSelector />
      </div>
      <div className='hack-items-container'>{hackItems}</div>
    </>
  );
};

export default MainDisplay;

