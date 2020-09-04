import React from 'react';

const NavBar = (props) => {
  return props.user ?
  (
    <div id='navBar'>
      <div id='navLeft'>
        <h5>Welcome, {props.user.id}</h5>
      </div>
      <div id='navLinks'>
        <h5>My Images</h5>
        <h5>Browse Images</h5>
        <h5>Log Out</h5>
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
      <h5>Browse Images</h5>
      <h5>Sign Up</h5>
      </div>
    </div>
  )
}

export default NavBar;
