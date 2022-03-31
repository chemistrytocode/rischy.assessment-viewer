import propTypes from 'prop-types';


// Selected Chemicals (Chemical Input)
export const selectedChemicalsPropTypes = propTypes.arrayOf(propTypes.shape({
  id: propTypes.string,
  state: propTypes.string,
  value: propTypes.string,
  hazardId: propTypes.string
}));

// Hazard Chemicals
export const hazardChemicalsPropTypes = propTypes.arrayOf(propTypes.shape({
  name: propTypes.string,
  state: propTypes.string,
  concentration: propTypes.string,
  comment: propTypes.string,
  hazards: propTypes.arrayOf(propTypes.string)
}));

// Control Measures
export const controlMeasuresPropTypes = propTypes.arrayOf(propTypes.shape({
  control: propTypes.string.isRequired,
  chemicals: propTypes.arrayOf(propTypes.string).isRequired
}));


// Emergency Actions
export const defaultEmergencyActionsPropTypes = propTypes.arrayOf(propTypes.shape({
  emergency: propTypes.string.isRequired,
  action: propTypes.string.isRequired,
  actionSubText: propTypes.string,
  actionNotes: propTypes.string.isRequired,
}));

export const chemicalEmergencyActionsPropTypes = propTypes.arrayOf(propTypes.shape({
  chemical: propTypes.string.isRequired,
  chemicalEmergencyActions: propTypes.arrayOf(propTypes.shape({
    emergency: propTypes.string.isRequired,
    action: propTypes.string.isRequired,
  }))
}));

export const escalationStatementPropType = propTypes.string.isRequired;

export const emergencyActionsPropTypes = propTypes.shape({
  defaultEmergencyActions: defaultEmergencyActionsPropTypes,
  chemicalEmergencyActions: chemicalEmergencyActionsPropTypes,
  escalationStatement: escalationStatementPropType
})

// Risk Assessment
export const riskAssessmentPropTypes = propTypes.shape({
  hazardChemicalsPropTypes,
  controlMeasuresPropTypes,
  emergencyActionsPropTypes
});
