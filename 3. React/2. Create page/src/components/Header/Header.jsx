import { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderMenu from './Header components/HeaderMenu';
import HeaderInfo from './Header components/HeaderInfo';
import HeaderLogo from './Header components/HeaderLogo/HeaderLogo';
import s from '../../style/header.module.scss';

class Header extends Component {
    render() {
        const { favouriteItems, cartItems, parseLocalStorage, parseLocalStorageFavourite } = this.props;
        return (
            <header className={s.header}>
                <HeaderMenu />
                <HeaderLogo />
                <HeaderInfo {...this.props} />
            </header>
        );
    }
}

Header.propTypes = {
    favouriteItems: PropTypes.array,
    cartItems: PropTypes.array,
    parseLocalStorage: PropTypes.func,
    parseLocalStorageFavourite: PropTypes.func,
};

export default Header;
