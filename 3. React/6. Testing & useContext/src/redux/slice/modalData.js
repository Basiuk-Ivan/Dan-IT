import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modalData: [],
    isModalOpen: false,
};

const modalData = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        getModalData: (state, action) => {
            state.modalData = action.payload;
        },
        removeModalData: (state, action) => {
            const modalDataArray = Object.values(state.modalData);
            state.modalData = modalDataArray.filter(item => item.article !== action.payload);
        },
        setIsModalOpen: (state, action) => {
            state.isModalOpen = action.payload;
        },
    },
});

export default modalData.reducer;

export const { getModalData, removeModalData, setIsModalOpen } = modalData.actions;
