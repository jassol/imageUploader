import React from 'react';

// const AuthApp = React.lazy(() => import('./components/AuthenticatedApp'));
// const UnauthApp = React.lazy(() => import('./components/UnauthenticatedApp'));

import AuthenticatedApp from './components/AuthenticatedApp';
import UnauthenticatedApp from './components/UnauthenticatedApp';

function App() {
  const loggedIn = () => {};
  const user = loggedIn();
  const loggedInState = !!user;
  if (loggedInState) return (
    <div>
      <AuthenticatedApp user={user} />
    </div>
  )
  else return (
    <div>
      <UnauthenticatedApp />;
    </div>
  )
}

export default App;
