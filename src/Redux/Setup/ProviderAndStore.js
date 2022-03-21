import React from 'react';
import propTypes from 'prop-types';
import { Provider } from 'react-redux';

import configureStore from './configureStore';

export const SetupReduxProviderAndStore = ({
  store,
  children,
}) => (
  <Provider store={configureStore(store)}>
      {children}
  </Provider>
);

SetupReduxProviderAndStore.propTypes = {
  store: propTypes.shape({}).isRequired,
  children: propTypes.node.isRequired,
};

export default SetupReduxProviderAndStore;
