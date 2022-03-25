import { chemicalActionTypes } from '../../Constants/actionTypes';

export const addChemicalToSelection = (dispatch, selectedChemical) => {
    const { value } = selectedChemical;
    dispatch({ type: chemicalActionTypes.ADD_CHEMICAL, payload: value });
};

export const removeChemicalFromSelection = (dispatch, selectedChemical) => {
    const { id } = selectedChemical;
    dispatch({ type: chemicalActionTypes.REMOVE_CHEMICAL, payload: id });
};

export const clearChemicalsFromSelection = (dispatch) => {
    dispatch({ type: chemicalActionTypes.CLEAR_CHEMICALS });
};
