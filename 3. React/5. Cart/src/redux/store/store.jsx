import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productsReducer } from '../reducers/productReducer';
import { modalDataReducer } from '../reducers/modalDataReducer';
import { isModalOpenReducer } from '../reducers/isModalOpenReducer';
import { favouriteItemsReducer2 } from '../reducers/favouriteItemsReduser2';
import { cartItemsReducer } from '../reducers/cartItemsReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    products: productsReducer,
    modalData: modalDataReducer,
    isModalOpen: isModalOpenReducer,
    favouriteItems2: favouriteItemsReducer2,
    cartItems: cartItemsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
