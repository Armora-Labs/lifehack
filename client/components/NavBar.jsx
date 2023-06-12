import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [value, setValue] = React.useState('Categories');

  //How do we get this handleChange info to MainDisplay? Move drop down to MainDisplay

  const handleChange = (event) => {
    event.prevent.Default();

    setValue(event.target.value); // should 'targe' be 'target'?
  };

  return (
    <div>
      <div>
        <label>
          <select value={value} onChange={handleChange}>
            <option value="Categories">Categories</option>
            <option value="Codesmith">Codesmith</option>
            <option value="Time">Time</option>
            <option value="Money">Money</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default NavBar;

// not sure if this is the right way to word this fetch request
// might be better moved to the MainDisplay with value passed in state to MainDisplay
