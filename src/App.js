import React from 'react';

import Header from './Components/Header/Header';
import ChemicalInputPage from './Pages/ChemicalInputPage/ChemicalInputPage';
import RiskAssessmentPage from './Pages/RiskAssessmentPage/RiskAssessmentPage';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <ChemicalInputPage />
      <RiskAssessmentPage />
      <Footer />
    </div>
  );
}

export default App;
