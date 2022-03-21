import React from 'react';

import Header from './Components/Header/Header';
import ChemicalInputPage from './Pages/ChemicalInputPage/ChemicalInputPage';
import RiskAssessmentPage from './Pages/RiskAssessmentPage/RiskAssessmentPage';
import Footer from './Components/Footer/Footer';
import SetupReduxProviderAndStore from './Redux/Setup/ProviderAndStore'
import configureStore from './Redux/Setup/configureStore';

import './App.css';

const store = configureStore();

const App = () => {
  return (
    <SetupReduxProviderAndStore store={store}>
      <Header />
      <ChemicalInputPage />
      <RiskAssessmentPage />
      <Footer />
    </SetupReduxProviderAndStore>
  );
}

export default App;
