import React from 'react';
import HackCreator from './HackCreator';



const MainDisplay = () => {
  return (
    <div className="displayContainer">
        Check Main Display
    </div>
    
  )
}



export default MainDisplay;




/* To Build List
    Login Page 
        - H1 Welcome to LifeHack
        -login / create user OAuth path

    Category Bar - functionality to  each category
        - Associated Fetch request + event
        - Event trigger to the hack display container


    Add Hack (button)
        - Form (Category, user, content)
        - Post request

    Hack Display Container
        - in fetch request have it create individual child compenents for each hack
            - each individual hack will have: like, down vote, edit, delete buttons

    Refresh button associated with Hack Display Container?


*/