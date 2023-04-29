import { Component } from 'react';
import PropTypes from 'prop-types';
import cart from '../../../../../assets/img/Header/iconInfo/cart.svg';
import s from '../../../../../style/header.module.scss';

class Cart extends Component {
    render() {
        const { cartItems, parseLocalStorage } = this.props;

        return (
            <div className={s.cart}>
                <a href="#">
                    <img src={cart} alt={'cart'}></img>
                    {parseLocalStorage()}
                </a>

                {/* <ul>
                        {cartItems.map(item => {
                            console.log(item);
                            return (
                                <li>
                                    {item.name} - {item.price}
                                </li>
                            );
                        })}
                    </ul> */}
            </div>
        );
    }
}

Cart.propTypes = {
    cartItems: PropTypes.array,
    parseLocalStorage: PropTypes.func,
};

export default Cart;
