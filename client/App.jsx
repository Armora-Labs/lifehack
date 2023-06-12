import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import HackCreator from './components/HackCreator';
import MainDisplay from './components/MainDisplay';

const App = () => {
  // const [value, setValue] = React.useState(['Categories', 'Codesmith', 'Time', 'Money']);
  const [dropdown, setDropdownChoice] = React.useState({ Categories });
  const [user, setUser] = useState({});
  // id, username

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Login} />
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
      4. Double checking the imports and exports, style sheets nesting
      5. Clean up login page ahead of OAuth

      const [user, setUser] -- useState({})


      // to set the local state
      useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
      }, [user])
      
      // to get item from the local state
      useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          setItems(user);
        } 
      }, []);
*/
