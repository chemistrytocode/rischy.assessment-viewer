import propTypes from 'prop-types';

export const selectedChemicalsPropTypes = propTypes.arrayOf(propTypes.shape({
  id: propTypes.string,
  state: propTypes.string,
  value: propTypes.string,
  hazardId: propTypes.string
}));

export const hazardChemicalsPropTypes = propTypes.arrayOf(propTypes.shape({
  name: propTypes.string,
  state: propTypes.string,
  concentration: propTypes.string,
  comment: propTypes.string,
  hazards: propTypes.arrayOf(propTypes.string)
}));

export const controlMeasuresPropTypes = propTypes.arrayOf(propTypes.string);

export const emergencyActionsPropTypes = propTypes.arrayOf(
  propTypes.shape({
  emergency: propTypes.string,
  action: propTypes.string
}))

export const riskAssessmentPropTypes = propTypes.shape({
  hazardChemicalsPropTypes,
  controlMeasuresPropTypes,
  emergencyActionsPropTypes
});