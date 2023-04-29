import { Link } from 'react-router-dom';
import cart from '../../../../../assets/img/Header/iconInfo/cart.svg';
import s from '../../../../../style/components/header.module.scss';

const HeaderCart = () => {
    const parseLocalStorageCart = () => {
        const productsLocalStore = localStorage.getItem('cartItems');
        const cartItems = JSON.parse(productsLocalStore) || [];

        return cartItems.length || 0;
    };

    return (
        <div className={s.cart}>
            <Link to="/cart">
                <img src={cart} alt={'cart'}></img>
            </Link>
            {parseLocalStorageCart()}
        </div>
    );
};

export default HeaderCart;
