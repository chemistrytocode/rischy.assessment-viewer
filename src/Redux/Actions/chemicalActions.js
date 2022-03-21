import { chemicalActionTypes } from '../Constants/actionTypes';

export const addChemicalToSelection = (dispatch, selectedChemical) => {
    const { value } = selectedChemical;
    dispatch({ type: chemicalActionTypes.ADD_CHEMICAL, payload: value });
};

