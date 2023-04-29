import { types } from '../types/types';

const defaultState = {
    products: [],
};

export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.GET_ALL_PRODUCTS:
            return { products: [...action.payload] };
        default:
            return state;
    }
};

export const getProductsAction = payload => ({ type: types.GET_ALL_PRODUCTS, payload });
