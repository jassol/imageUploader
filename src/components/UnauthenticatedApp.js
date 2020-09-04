import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import AllImages from './AllImages'
import Login from './Login'
import { Switch, Route } from "react-router-dom";

function UnauthenticatedApp(props) {
  const { logIn } = props;
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/login">
          <Login logIn={logIn} />
        </Route>
        <Route path="/signup">
          {/* <Signup logIn={logIn} /> */}
        </Route>
        <Route path="/">
          <AllImages />
        </Route>
      </Switch>
    </div>
  );
}

export default UnauthenticatedApp;
