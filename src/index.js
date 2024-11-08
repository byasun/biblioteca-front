import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import store from './store';
import App from './App';
import GlobalStyles from './GlobalStyles';

// Obtenha os valores do .env
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const Auth0ProviderWithRedux = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    }
  }, [isAuthenticated, user, dispatch]);

  return children;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <Router>
          <Auth0ProviderWithRedux>
            <GlobalStyles />
            <App />
          </Auth0ProviderWithRedux>
        </Router>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
