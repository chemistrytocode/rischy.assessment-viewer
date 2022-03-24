import { chemicalActionTypes } from '../Constants/actionTypes.js';
import { isChemicalAreadyInState, sortChemicalsByName } from '../../Utils/reduxHelpers/reduxHelpers';

const initialChemicalState = [];

const chemicalReducer = ({ selectedChemicals } = []) => (state = selectedChemicals, { type, payload }) => {
    const chemicalState = state || initialChemicalState;

    switch (type) {
        case chemicalActionTypes.ADD_CHEMICAL: {
            if (isChemicalAreadyInState(chemicalState, payload)) return chemicalState;
            const newState = [...chemicalState, payload];
            return sortChemicalsByName(newState);
        }
        case chemicalActionTypes.REMOVE_CHEMICAL: {
            return [
                ...chemicalState.filter(chemical => !chemical.id.includes(payload))
            ]
        }
        default:
            return chemicalState;
    }
};

export default chemicalReducer;