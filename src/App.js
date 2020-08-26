import React from 'react';

// const AuthApp = React.lazy(() => import('./components/AuthenticatedApp'));
// const UnauthApp = React.lazy(() => import('./components/UnauthenticatedApp'));

import AuthenticatedApp from './components/AuthenticatedApp';
import UnauthenticatedApp from './components/UnauthenticatedApp';

function App() {
  const loggedIn = () => false;
  const loggedInState = loggedIn();
  return loggedInState ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
