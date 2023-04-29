import { closeModal } from './closeModal';
import { cartItemsActions } from '../redux/reducers/cartItemsReducer';

const handleCloseModal = (data, dispatch) => {
    closeModal(data, dispatch);
};

export const handleAddToCart = (data, dispatch) => {
    dispatch(cartItemsActions(data));

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(data);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartItem_' + data.article, JSON.stringify({ isCart: true }));

    handleCloseModal(data, dispatch);
};
