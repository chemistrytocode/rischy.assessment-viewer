import React from 'react';

import SetupReduxProviderAndStore from './Redux/Setup/ProviderAndStore'
import configureStore from './Redux/Setup/configureStore';
import RischyPageHandler from './Pages/RischyPageHandler/RischyPageHandler';

import './App.css';

const store = configureStore();

const App = () => {
  return (
    <SetupReduxProviderAndStore store={store}>
      <RischyPageHandler />
    </SetupReduxProviderAndStore>
  );
}

export default App;
