import { Component } from 'react';
import logo from '../../../../assets/img/Header/logo/logo.svg';
import s from '../../../../style/header.module.scss';

class HeaderLogo extends Component {
    render() {
        return (
            <div className={s.headerLogo}>
                <a href="#">
                    <img src={logo} alt={'logo'}></img>
                </a>
            </div>
        );
    }
}

export default HeaderLogo;
