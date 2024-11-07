import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import App from './App';
import GlobalStyles from './GlobalStyles';
import { useAuth0 } from '@auth0/auth0-react';

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
    <Provider store={store}>
      <Router>
        <Auth0ProviderWithRedux>
          <GlobalStyles />
          <App />
        </Auth0ProviderWithRedux>
      </Router>
    </Provider>
  </React.StrictMode>
);