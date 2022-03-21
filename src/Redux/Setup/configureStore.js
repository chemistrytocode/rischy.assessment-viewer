import { createStore, combineReducers, compose  } from 'redux';
import stockReducer from '../Reducers/stockReducer';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (a) => a;

const configureStore = (initialState) => createStore(
    combineReducers({
     stock: stockReducer(initialState),
    }),
    compose(devtools)
  );

  export default configureStore;