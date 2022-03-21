import { stockActionTypes } from '../Constants/actionTypes.js';

const initialStockState = [];

const stockReducer = ({ stock } = []) => (state = stock, { type, payload }) => {
    const stockState = state || initialStockState;

    switch (type) {
        case stockActionTypes.SET_STOCK: {
            return [
                ...stockState,
                ...payload
            ];
        }
        default:
            return stockState;
    }
};

export default stockReducer;