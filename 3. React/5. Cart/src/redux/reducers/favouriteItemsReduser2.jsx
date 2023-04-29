import { types } from '../types/types';

const defaultState = {
    favouriteItems2: JSON.parse(localStorage.getItem('favouriteItems')) || [],
};

export const favouriteItemsReducer2 = (state = defaultState, action) => {
    switch (action.type) {
        case types.ADD_FAVOURITE_PRODUCT:
            return {
                ...state,
                favouriteItems2: [...state.favouriteItems2, action.payload],
            };
            case types.DELETE_FAVOURITE_PRODUCT:
                return {
                    ...state,
                    favouriteItems2: state.favouriteItems2.filter(item => item.article!== action.payload)
                };
        default:
            return state;
    }
};

export const favouriteItemsActions2 = payload => ({ type: types.ADD_FAVOURITE_PRODUCT, payload });
