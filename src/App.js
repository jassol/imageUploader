import React from 'react';

// const AuthApp = React.lazy(() => import('./components/AuthenticatedApp'));
// const UnauthApp = React.lazy(() => import('./components/UnauthenticatedApp'));

import AuthenticatedApp from './components/AuthenticatedApp';
import UnauthenticatedApp from './components/UnauthenticatedApp';

function App() {
  const loggedIn = () => true;
  const loggedInState = loggedIn();
  return loggedInState ? <AuthenticatedApp user='1' /> : <UnauthenticatedApp />;
}

export default App;
