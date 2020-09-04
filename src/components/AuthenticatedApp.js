import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import AllImages from './AllImages';
import { Switch, Route } from "react-router-dom";

function AuthenticatedApp(props) {
  const { user } = props;

  return (
    <div>
      <NavBar user={user} />
      <Switch>
        <Route path="/images/:userId">
          <AllImages user={user} />
        </Route>
        <Route path="/">
          <AllImages/>
        </Route>
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;
