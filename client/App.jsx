import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import HackCreator from './components/HackCreator';
import MainDisplay from './components/MainDisplay';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

const App = () => {
  // const [value, setValue] = React.useState(['Categories', 'Codesmith', 'Time', 'Money']);
  const [user, setUser] = useState({})
  // id, username

  function handleCallbackResponse(response) {
    console.log('whole response: ', response);
    console.log('Encoded JWT ID token: ' + response.credential);
    const userObject = jwtDecode(response.credential);
    console.log(userObject)
    setUser(userObject)
    document.getElementById('signInDiv').hidden = true;
    
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '745677008135-28koou137ibajp5jnjalltuu1slpbsde.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {theme: 'outline', size: 'large'}
    );

    google.accounts.id.prompt();
  }, []);
  // If we have no user: sign in button
  // If we have a user: show the log out button

  async function makeUser(e) {
    e.preventDefault();
    const name = document.getElementById('create-account-input').value;
    const fetchProps = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name})
    };
    const newUser = await fetch('/api/user', fetchProps).then(ans => ans.json());
    console.log('New User; ', newUser[0]);
    setUser(newUser[0]);
  }

  // async function loginUser() {}
  

  // async function oauthUser() {}

  return (
    <Router>
      <NavBar />
      <h3>{user.username}</h3>
      <div id="signInDiv"></div>
      { Object.keys(user).length != 0 &&
        <button id="signOutBttn" onClick={ e => handleSignOut(e)}>Sign Out</button>
      }
      
      { user && 
        <div>
          <img src = {user.picture}/>
          <h3>{user.name}</h3>
        </div>
      }
      <Switch>
        <Route path="/">
          <Login makeUser={makeUser} />
        </Route>
        {/* <Route path="/dashboard" element={<Dashboard authed={true} />} /> */}
        {/* <Route path="/" element={<Login makeUser={makeUser}/>}/> */}
          {/* <Route path="/" component={Login} makeUser={makeUser}/> */}
          {/* <Route path="/base" component={MainDisplay} />
          <Route path="/create" component={CreateHack} />
          <Route path="/categories" component={Login} />  */}
      </Switch>
      <MainDisplay />
      <HackCreator />
    </Router>
    // <mainContainer />
  );
};

export default App;

/*
      OAUTH login - useEffect, not a component inside of React
      Will need to add specific code to HTML for connection
      Sign up app, add google.accounts.id to the useEffect
      Google method creates the button, there is some styling 

      jwtDecode 'jwt-decode' needs to be imported


      1. Move state to App and pass down through other components
      2. Finish set up and test Fetch request from Categories bar
      3. Finish setting up Hack page for individual hack containers
      4. Double checking the imports and exports, style sheets nesting
      5. Clean up login page ahead of OAuth
      
*/
