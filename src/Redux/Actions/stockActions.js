import fetchStockData from "../../Utils/fetchStockData/fetchStockData";
import { stockActionTypes } from '../../Constants/actionTypes';

const getStockData = async (dispatch) => {
    const stockResponse = await fetchStockData();

    if (stockResponse.length > 1) {
        dispatch({ type: stockActionTypes.SET_STOCK, payload: stockResponse });
    }
};

export default getStockData;
