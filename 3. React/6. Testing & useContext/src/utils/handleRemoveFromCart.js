import { closeModal } from './closeModal';
import { deleteFromCartItems } from '../redux/slice/cartItems';

const handleCloseModal = (data, dispatch) => {
    closeModal(data, dispatch);
};

export const handleRemoveFromCart = (data, dispatch) => {
    dispatch(deleteFromCartItems(data.article));

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedItems = cartItems.filter(item => item.article !== data.article);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    localStorage.removeItem('cartItem_' + data.article);

    handleCloseModal(data, dispatch);
};
