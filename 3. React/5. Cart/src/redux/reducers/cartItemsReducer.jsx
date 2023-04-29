import { types } from '../types/types';

const defaultState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

export const cartItemsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.ADD_CART_ITEMS:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case types.DELETE_CART_ITEMS:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.article !== action.payload),
            };
        case types.CLEAR_CART:
            return defaultState;

        default:
            return state;
    }
};

export const cartItemsActions = payload => ({ type: types.ADD_CART_ITEMS, payload });
