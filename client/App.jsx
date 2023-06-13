import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import HackCreator from './components/HackCreator';
import MainDisplay from './components/MainDisplay';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { set } from 'lodash';

const App = () => {
  // const [value, setValue] = React.useState(['Categories', 'Codesmith', 'Time', 'Money']);
  const [user, setUser] = useState({})
  // id, username

  async function handleCallbackResponse(response) {
    // console.log('whole response: ', response);
    // console.log('Encoded JWT ID token: ' + response.credential);
    const userObject = jwtDecode(response.credential);
    // console.log(userObject);
    const googlename = userObject.name;
    console.log('googlename', googlename);
    let googleuser;
    googleuser = await fetch(`api/user/${googlename}`);
    const checkIfUserExists = await googleuser.json();
    // console.log('response in handlecallback', scheckIfUserExists);
    if (checkIfUserExists.length > 0) {
      console.log('user already exists')
      document.getElementById('signInDiv').hidden = true;
      setUser(checkIfUserExists[0]);
    }
    else {
      const fetchProps = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name: googlename})
      };
      const responseFromCreatingUser = await fetch(`api/user/`, fetchProps);
      googleuser = await responseFromCreatingUser.json();
      console.log('googleuser', googleuser[0]);
      document.getElementById('signInDiv').hidden = true;
      setUser(googleuser[0]);
    } 
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
    const input = document.getElementById('create-account-input');
    const name = input.value;
    const fetchProps = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name})
    };
    const newUser = await fetch('/api/user', fetchProps).then(ans => ans.json());
    console.log('New User; ', newUser[0]);
    setUser(newUser[0]);
    input.value = '';
  }

  async function loginUser(e) {
    e.preventDefault();
    const input = document.getElementById('login-account-input');
    const response = await fetch(`/api/user/${input.value}`)
    const user = await response.json();
    console.log('Logged in user: ', user[0]);
    setUser(user[0]);
    input.value = '';
  }
  
  async function changeDisplayName(e) {
    console.log('clicked displayname')
    e.preventDefault();
    const input = document.getElementById('change-displayname');
    // console.log(input.value);
    const displayName = input.value;
    const fetchProps = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id: user.id, newUsername: displayName})
    };
    const response = await fetch(`/api/user/`, fetchProps)
    const displayNameAfter = await response.json();
    console.log('Changed user: ', displayNameAfter[0]);
    setUser(displayNameAfter[0]);
    input.value = '';
  }



  return (
    <Router>
      <h3>{user.username}</h3>
      <div id="signInDiv"></div>
      { Object.keys(user).length != 0 &&
      <>
        <button id="signOutBttn" onClick={ e => handleSignOut(e)}>Sign Out</button>
        <input id='change-displayname'/>
        <button id='change-displayname-bttn' onClick={changeDisplayName}>Change Display Name</button>
      </>
      }
      
      { user && 
        <div>
          <img src = {user.picture}/>
          <h3>{user.name}</h3>
        </div>
      }
      <Switch>
        <Route path="/">
          <Login makeUser={makeUser} loginUser={loginUser}/>
        </Route>
        {/* <Route path="/dashboard" element={<Dashboard authed={true} />} /> */}
        {/* <Route path="/" element={<Login makeUser={makeUser}/>}/> */}
          {/* <Route path="/" component={Login} makeUser={makeUser}/> */}
          {/* <Route path="/base" component={MainDisplay} />
          <Route path="/create" component={CreateHack} />
          <Route path="/categories" component={Login} />  */}
      </Switch>
      <MainDisplay class='hack-items-container' />
      <HackCreator user={user}/>
    </Router>
    // <mainContainer />
  );
};

export default App;



