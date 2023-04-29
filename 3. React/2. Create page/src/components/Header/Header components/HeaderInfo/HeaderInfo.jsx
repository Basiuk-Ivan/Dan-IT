import { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../../../../style/header.module.scss';
import HeaderSearch from './HeaderSearch';
import HeaderAccount from './HeaderAccount';
import FavouriteProduct from './FavouriteProduct';
import Cart from './Cart';

class HeaderInfo extends Component {
    render() {
        const { favouriteItems, cartItems, parseLocalStorage, parseLocalStorageFavourite } = this.props;

        return (
            <div className={s.headerInfo}>
                <HeaderSearch />
                <HeaderAccount />
                <FavouriteProduct parseLocalStorageFavourite={parseLocalStorageFavourite} favouriteItems={favouriteItems} />
                <Cart parseLocalStorage={parseLocalStorage} cartItems={cartItems} />
            </div>
        );
    }
}

HeaderInfo.propTypes = {
    favouriteItems: PropTypes.array,
    cartItems: PropTypes.array,
    parseLocalStorage: PropTypes.func,
    parseLocalStorageFavourite: PropTypes.func,
};

export default HeaderInfo;
