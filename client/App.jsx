import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import HackCreator from './components/HackCreator';
import MainDisplay from './components/MainDisplay';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

const App = () => {
  // const [value, setValue] = React.useState(['Categories', 'Codesmith', 'Time', 'Money']);
  const [user, setUser] = useState({});
  // id, username

  function handleCallbackResponse(response) {
    console.log('whole response: ', response);
    console.log('Encoded JWT ID token: ' + response.credential);
    const userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById('signInDiv').hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '745677008135-28koou137ibajp5jnjalltuu1slpbsde.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });

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
      body: JSON.stringify({ name }),
    };
    const newUser = await fetch('/api/user', fetchProps).then((ans) =>
      ans.json()
    );
    console.log('New User; ', newUser[0]);
    setUser(newUser[0]);
  }

  // async function loginUser() {}

  // async function oauthUser() {}

  const GoogleSignIn = () => {
    return (
      <div className="gsignin">
        <h3>{user.username}</h3>
        <div id="signInDiv"></div>
        {Object.keys(user).length != 0 && (
          <button id="signOutBttn" onClick={(e) => handleSignOut(e)}>
            Sign Out
          </button>
        )}

        {user && (
          <div>
            <img src={user.picture} />
            <h3>{user.name}</h3>
          </div>
        )}
      </div>
    );
  };

  return (
    <Router>
      <GoogleSignIn />
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