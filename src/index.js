import React from 'react';
import { StatusBar } from 'react-native';
/* Importação do Provider do react-redux para deixa-lo disponível para toda a aplicação. */
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import store from './store';

import Routes from './routes';
import NavigationService from './services/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}
