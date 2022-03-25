import { riskAssessmentActionTypes } from '../../Constants/actionTypes';
import fetchRiskAssessment from '../../Utils/fetchRiskAssessment/fetchRiskAssessment';
import chemicalIdsQueryStringBuilder from '../../Utils/chemicalIdsQueryStringBuilder/chemicalIdsQueryStringBuilder';

export const generateRiskAssessment = async (selectedChemicals, dispatch) => {
    const chemicalIdsQueryString = chemicalIdsQueryStringBuilder(selectedChemicals);
    const riskAssessment = await fetchRiskAssessment(chemicalIdsQueryString);
    dispatch({ type: riskAssessmentActionTypes.SET_RISK_ASSESSMENT, payload: riskAssessment });
};

export const clearRiskAssessment = (dispatch) => dispatch({ type: riskAssessmentActionTypes.CLEAR_RISK_ASSESSMENT })

