import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const AuthApp = React.lazy(() => import('./components/AuthenticatedApp'));
// const UnauthApp = React.lazy(() => import('./components/UnauthenticatedApp'));

import AuthenticatedApp from './components/AuthenticatedApp';
import UnauthenticatedApp from './components/UnauthenticatedApp';

function App() {

  const [user, setUser] = useState(null);

  const logIn = user => {
    setUser(user);
  };

  const logOut = () => {
    setUser(null)
  }


  useEffect(() => {
    const getMe = async () => {
      try {
        const { data } = await axios.get('/auth/me');
        if (data.id) {
          logIn(data);
        }
      } catch (error) {
        console.error('Guest User')
      }
    }
    getMe();
  }, []);

  const loggedInState = !!user;
  if (loggedInState) return (
    <div>
      <AuthenticatedApp user={user} logOut={logOut} />
    </div>
  )
  else return (
    <div>
      <UnauthenticatedApp logIn={logIn} />
    </div>
  )
}

export default App;
