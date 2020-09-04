import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import AllImages from './AllImages'
import Login from './Login'
import { Switch, Route } from "react-router-dom";

function UnauthenticatedApp() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          {/* <Signup /> */}
        </Route>
        <Route path="/">
          <AllImages />
        </Route>
      </Switch>
    </div>
  );
}

export default UnauthenticatedApp;
