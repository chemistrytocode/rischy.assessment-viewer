import { chemicalActionTypes, riskAssessmentActionTypes } from '../../Redux/Constants/actionTypes';
import fetchRiskAssessment from '../../Utils/fetchRiskAssessment/fetchRiskAssessment';
import chemicalIdsQueryStringBuilder from '../../Utils/chemicalIdsQueryStringBuilder/chemicalIdsQueryStringBuilder';

export const addChemicalToSelection = (dispatch, selectedChemical) => {
    const { value } = selectedChemical;
    dispatch({ type: chemicalActionTypes.ADD_CHEMICAL, payload: value });
};

export const removeChemicalFromSelection = (dispatch, selectedChemical) => {
    const { id } = selectedChemical;
    dispatch({ type: chemicalActionTypes.REMOVE_CHEMICAL, payload: id });
};

export const submitChemicalsToAssessmentGenerator = async (selectedChemicals, dispatch) => {
    const chemicalIdsQueryString = chemicalIdsQueryStringBuilder(selectedChemicals);
    const riskAssessment = await fetchRiskAssessment(chemicalIdsQueryString);
    dispatch({ type: riskAssessmentActionTypes.SET_RISK_ASSESSMENT, payload: riskAssessment });  
};

