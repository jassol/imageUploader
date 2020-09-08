import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import AllImages from './AllImages';
import { Switch, Route } from "react-router-dom";

function AuthenticatedApp(props) {
  const { user, logOut } = props;

  return (
    <div>
      <NavBar user={user} logOut={logOut} />
      <Switch>
        <Route path="/myimages">
          <AllImages user={user} />
        </Route>
        <Route path="/images">
          <AllImages user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;
