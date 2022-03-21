import { riskAssessmentActionTypes } from '../Constants/actionTypes.js';

const initialRiskAssessmentState = [];

const riskAssessmentReducer = ({ riskAssessment } = {}) => (state = riskAssessment, { type, payload }) => {
    const riskAssessmentState = state || initialRiskAssessmentState;

    switch (type) {
        case riskAssessmentActionTypes.SET_RISK_ASSESSMENT: {
            return {
                ...riskAssessmentState,
                ...payload
            }
        }
        default:
            return riskAssessmentState;
    }
};

export default riskAssessmentReducer;