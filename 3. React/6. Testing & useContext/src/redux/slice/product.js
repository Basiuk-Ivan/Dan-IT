import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
};

const products = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getAllProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export default products.reducer;

export const { getAllProducts } = products.actions;
