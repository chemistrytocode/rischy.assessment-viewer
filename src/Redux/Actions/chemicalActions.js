import { chemicalActionTypes, riskAssessmentActionTypes } from '../../Redux/Constants/actionTypes';
import fetchRiskAssessment from '../../Utils/fetchRiskAssessment/fetchRiskAssessment';

export const addChemicalToSelection = (dispatch, selectedChemical) => {
    const { value } = selectedChemical;
    dispatch({ type: chemicalActionTypes.ADD_CHEMICAL, payload: value });
};

export const removeChemicalFromSelection = (dispatch, selectedChemical) => {
    const { id } = selectedChemical;
    dispatch({ type: chemicalActionTypes.REMOVE_CHEMICAL, payload: id });
};

export const submitChemicalsToAssessmentGenerator = async (dispatch) => {
    // TODO: Fetch Risk Assessment /w Chemical Parameters
    const riskAssessment = await fetchRiskAssessment();
    dispatch({ type: riskAssessmentActionTypes.SET_RISK_ASSESSMENT, payload: riskAssessment });  
};

