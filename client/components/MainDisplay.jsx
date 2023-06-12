import React, { useState, useEffect } from 'react';
import HackCreator from './HackCreator';

// Remove this if/when move Drop Down
import NavBar from './NavBar';

const MainDisplay = () => {
  //   return <div className="displayContainer">Check Main Display</div>;

  // Need to get the handleChange event info from NavBar passed here (Move Drop down menu to here?)

  const [hacks, setHack] = useState([]);

  const hackItems = [];

  // Currently set up to rerender each time fetch is made

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => setHack(data));
  });

  for (let i = 0; i < hacks.length; i++) {
    hackItems.push(<Hack hacks={hacks[i]} />);
  }

  return <div>{hackItems}</div>;
};

export default MainDisplay;
