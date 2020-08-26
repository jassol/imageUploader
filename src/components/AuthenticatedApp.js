import React, { useEffect } from 'react';
import '../App.css';
import NavBar from './NavBar';

function AuthenticatedApp() {

  // react hook that runs after every render
  useEffect(() => {
    document.title = `...........?`;
  });

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <p>
          Authenticated App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          react
        </a>
      </header>
    </div>
  );
}

export default AuthenticatedApp;
