import { chemicalActionTypes } from '../Constants/actionTypes.js';

const initialChemicalState = [];

const chemicalReducer = ({ selectedChemicals } = []) => (state = selectedChemicals, { type, payload }) => {
    const chemicalState = state || initialChemicalState;

    switch (type) {
        case chemicalActionTypes.ADD_CHEMICAL: {
            return [
                ...chemicalState,
                payload,
            ];
        }
        default:
            return chemicalState;
    }
};

export default chemicalReducer;