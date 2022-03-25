import { riskAssessmentActionTypes } from '../Constants/actionTypes.js';

const initialRiskAssessmentState = {};

const riskAssessmentReducer = ({ riskAssessment } = {}) => (state = riskAssessment, { type, payload }) => {
    const riskAssessmentState = state || initialRiskAssessmentState;

    switch (type) {
        case riskAssessmentActionTypes.SET_RISK_ASSESSMENT: {
            return {
                ...riskAssessmentState,
                ...payload
            }
        }
        case riskAssessmentActionTypes.CLEAR_RISK_ASSESSMENT: {
            return {}
        }
        default:
            return riskAssessmentState;
    }
};

export default riskAssessmentReducer;