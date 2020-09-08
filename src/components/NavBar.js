import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return props.user ?
  (
    <div id='navBar'>
      <div id='navLeft'>
        <h5>Welcome, {props.user.email}</h5>
      </div>
      <div id='navLinks'>
        <Link to={`/myimages`}>My Images</Link>
        <Link to='/images'>Browse Images</Link>
        <button id="logout" onClick={props.logOut}>Log Out</button>
      </div>
    </div>
  )
  :
  (
    <div id='navBar'>
      <div id='navLeft'>
        <h5>Welcome</h5>
      </div>
      <div id='navLinks'>
        <Link to='/images'>Browse Images</Link>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
    </div>
  )
}

export default NavBar;
