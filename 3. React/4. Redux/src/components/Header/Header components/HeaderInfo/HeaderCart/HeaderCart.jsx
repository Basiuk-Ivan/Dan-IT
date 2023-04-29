import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cart from '../../../../../assets/img/Header/iconInfo/cart.svg';
import s from '../../../../../style/components/header.module.scss';

const HeaderCart = () => {
    const cartItes = useSelector(state => state.cartItems.cartItems);

    return (
        <div className={s.cart}>
            <Link to="/cart">
                <img src={cart} alt={'cart'}></img>
            </Link>
            {cartItes.length}
        </div>
    );
};

export default HeaderCart;
