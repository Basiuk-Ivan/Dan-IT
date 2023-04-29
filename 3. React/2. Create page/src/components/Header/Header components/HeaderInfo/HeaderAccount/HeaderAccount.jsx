import { Component } from 'react';
import account from '../../../../../assets/img/Header/iconInfo/account.svg';
import s from '../../../../../style/header.module.scss';

class HeaderAccount extends Component {
    render() {
        return (
            <div className={s.headerAccount}>
                <a href="#">
                    <img src={account} alt={'account'}></img>
                </a>
            </div>
        );
    }
}

export default HeaderAccount;
