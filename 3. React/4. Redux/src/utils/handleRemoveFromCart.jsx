import { closeModal } from './closeModal';
import { types } from '../redux/types/types';

const handleCloseModal = (data, dispatch) => {
    closeModal(data, dispatch);
};

export const handleRemoveFromCart = (data, dispatch) => {
    dispatch({ type: types.DELETE_CART_ITEMS, payload: data.article });

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedItems = cartItems.filter(item => item.article !== data.article);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    localStorage.removeItem('cartItem_' + data.article);

    handleCloseModal(data, dispatch);
};
