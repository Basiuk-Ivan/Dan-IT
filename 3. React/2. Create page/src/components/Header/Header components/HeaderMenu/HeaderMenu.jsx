import { Component } from 'react';
import s from '../../../../style/header.module.scss';

class HeaderMenu extends Component {
    render() {
        return (
            <div className={s.headerMenu}>
                <ul className={s.headerMenuList}>
                    <li className={s.headerMenuItem}>
                        <a className={s.headerMenuLink} href="#">
                            Каталог
                        </a>
                    </li>
                    <li className={s.headerMenuItem}>
                        <a className={s.headerMenuLink} href="#">
                            LookBook
                        </a>
                    </li>
                    <li className={s.headerMenuItem}>
                        <a className={s.headerMenuLink} href="#">
                            Про бренд
                        </a>
                    </li>
                    <li className={s.headerMenuItem}>
                        <a className={s.headerMenuLink} href="#">
                            Інформація
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default HeaderMenu;
