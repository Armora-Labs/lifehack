import React, { useState, useEffect } from 'react';
import HackCreator from './HackCreator';
import NavBar from './NavBar';

const MainDisplay = () => {
  return <div className="displayContainer">Check Main Display</div>;

  // Need to get the handleChange event info from NavBar passed here

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

/* To Build List
    Login Page 
        - H1 Welcome to LifeHack
        -login / create user OAuth path

    Category Bar - functionality to  each category
        - Associated Fetch request + event
        - Event trigger to the hack display container


    Hack Display Container
        - in fetch request have it create individual child compenents for each hack
            - each individual hack will have: like, down vote, edit, delete buttons

    Refresh button associated with Hack Display Container?


*/
