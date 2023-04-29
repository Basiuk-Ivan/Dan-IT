import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../slice/product';
import modalDataSlice from '../slice/modalData';
import favouriteItemsSlice from '../slice/favouriteItems';
import cartItemsSlice from '../slice/cartItems';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        products: productsSlice,
        modalData: modalDataSlice,
        favouriteItems: favouriteItemsSlice,
        cartItems: cartItemsSlice,
    },
    middleware: [thunk],
});
