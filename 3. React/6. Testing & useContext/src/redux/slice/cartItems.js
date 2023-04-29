import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const cartItems = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addToCartItems: (state, action) => {
            state.cartItems.push(action.payload);
        },
        deleteFromCartItems: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.article !== action.payload);
        },
        clearCart: state => {
            state.cartItems = [];
        },
    },
});

export default cartItems.reducer;

export const { addToCartItems, deleteFromCartItems, clearCart } = cartItems.actions;
