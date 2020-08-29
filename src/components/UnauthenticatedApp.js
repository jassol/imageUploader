import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import AllImages from './AllImages'

function UnauthenticatedApp() {
  return (
    <div>
      <NavBar user='guest' />
      <div className='app-body'>
        <AllImages />
      </div>
    </div>
  );
}

export default UnauthenticatedApp;
