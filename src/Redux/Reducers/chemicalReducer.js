import { chemicalActionTypes } from '../../Constants/actionTypes.js';
import { isChemicalAreadyInState, sortChemicalsByName } from '../../Utils/reduxHelpers/reduxHelpers';

const initialChemicalState = [];

const chemicalReducer = ({ selectedChemicals } = []) => (state = selectedChemicals, { type, payload }) => {
    const chemicalState = state || initialChemicalState;

    switch (type) {
        case chemicalActionTypes.ADD_CHEMICAL: {
            if (isChemicalAreadyInState(chemicalState, payload)) return chemicalState;
            const newState = [...chemicalState, payload];
            const sortedState = sortChemicalsByName(newState);
            return sortedState;
        }
        case chemicalActionTypes.REMOVE_CHEMICAL: {
            return [
                ...chemicalState.filter(chemical => !chemical.id.includes(payload))
            ]
        }
        case chemicalActionTypes.CLEAR_CHEMICALS: {
            return []
        }
        default:
            return chemicalState;
    }
};

export default chemicalReducer;