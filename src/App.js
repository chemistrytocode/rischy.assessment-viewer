import React from 'react';

import Header from './Components/Header/Header';
import ChemicalInputPage from './Pages/ChemicalInputPage/ChemicalInputPage';
import RiskAssessmentPage from './Pages/RiskAssessmentPage/RiskAssessmentPage';

function App() {
  return (
    <div>
      <Header />
      <ChemicalInputPage />
      <RiskAssessmentPage />
    </div>
  );
}

export default App;
