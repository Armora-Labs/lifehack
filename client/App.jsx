import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import NavBar from './components/NavBar'
import HackCreator from './components/HackCreator'
import MainDisplay from './components/MainDisplay'


const App = () => {

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
    </Router>
    // <mainContainer />
  )
}

export default App

/*
      
      
      
      
*/
