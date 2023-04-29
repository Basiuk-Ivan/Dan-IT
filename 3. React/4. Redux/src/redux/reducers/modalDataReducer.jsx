import { types } from '../types/types';

const defaultState = {
    modalData: [],
};

export const modalDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.GET_MODAL_DATA:
            return { 
                ...state,
                modalData: { ...action.payload } };
        case types.REMOVE_MODAL_DATA:
            const modalDataArray = Object.values(state.modalData);
            return {
                ...state,
                modalData: modalDataArray.filter(item => item.article!== action.payload),
                }
        default:
            return state;
    }
};

export const getModalDataAction = payload => ({ type: types.GET_MODAL_DATA, payload });
