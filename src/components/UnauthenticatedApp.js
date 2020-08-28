import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import AllImages from './AllImages'

function UnauthenticatedApp() {
  return (
    <div>
      <NavBar />
      <div className='app-body'>
        <p>For testing purposes, try out this login info</p>
        <p>Username: test@test.com</p>
        <p>Password: 123</p>
        <AllImages />
      </div>
    </div>
  );
}

export default UnauthenticatedApp;
