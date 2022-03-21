import { createStore, combineReducers, compose  } from 'redux';
import stockReducer from '../Reducers/stockReducer';
import chemicalReducer from '../Reducers/chemicalReducer';
import riskAssessmentReducer from '../Reducers/riskAssessmentReducer';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (a) => a;

const configureStore = (initialState) => createStore(
    combineReducers({
     stock: stockReducer(initialState),
     selectedChemicals: chemicalReducer(initialState),
     riskAssessment: riskAssessmentReducer(initialState)
    }),
    compose(devtools)
  );

  export default configureStore;