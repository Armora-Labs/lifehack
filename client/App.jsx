import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import NavBar from './components/NavBar'
import HackCreator from './components/HackCreator'
import MainDisplay from './components/MainDisplay'


const App = () => {

  // const [value, setValue] = React.useState(['Categories', 'Codesmith', 'Time', 'Money']);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Login} />
        {/* <Route path="/base" component={MainDisplay} />
        <Route path="/create" component={CreateHack} />
        <Route path="/categories" component={Login} />  */}
      </Switch>
      <HackCreator />
    </Router>
    // <mainContainer />
  )
}

export default App

/*
      
      
      
      
*/
