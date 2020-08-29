import React, { useEffect } from 'react';
import '../App.css';
import NavBar from './NavBar';
import AllImages from './AllImages';

function AuthenticatedApp(props) {
  const { user } = props;

  return (
    <div>
      <NavBar user={user} />
      <div className='app-body'>
        <AllImages />
      </div>
    </div>
  );
}

export default AuthenticatedApp;
