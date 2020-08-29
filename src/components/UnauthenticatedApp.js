import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import AllImages from './AllImages'
import { Switch, Route } from "react-router-dom";

function UnauthenticatedApp() {
  return (
    <div>
      <NavBar user='guest' />
      <Switch>
        <Route path="/login">
          {/* <Login /> */}
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
