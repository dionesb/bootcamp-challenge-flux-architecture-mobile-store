import React from 'react';
import { StatusBar } from 'react-native';
/* Importação do Provider do react-redux para deixa-lo disponível para toda a aplicação. */
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import Routes from './routes';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes />
    </Provider>
  );
}
