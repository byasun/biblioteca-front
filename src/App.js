import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes';
import { Auth0Provider } from '@auth0/auth0-react';

const App = () => (
  <Auth0Provider
    domain="dev-t1ukn6ikrnzevle8.us.auth0.com"
    clientId="fCYldhE3wS28SmorCNo2fja019JLg09V"
    redirectUri={window.location.origin}
  >
    <Navbar />
    <AppRoutes />
  </Auth0Provider>
);

export default App;
