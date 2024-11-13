import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import AppRoutes from './routes';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Navbar />
    <AppRoutes />  
  </Provider>
);

export default App;
