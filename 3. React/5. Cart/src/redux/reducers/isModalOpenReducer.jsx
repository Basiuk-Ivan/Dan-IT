import { types } from '../types/types';

const defaultState = {
    isModalOpen: false,
};

export const isModalOpenReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.IS_MODAL_OPEN:
            return { isModalOpen: action.payload };
        default:
            return state;
    }
};

export const isModalOpenAction = payload => ({ type: types.IS_MODAL_OPEN, payload });
