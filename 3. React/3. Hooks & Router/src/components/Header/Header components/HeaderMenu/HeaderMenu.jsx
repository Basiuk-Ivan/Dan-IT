import { Link } from 'react-router-dom';
import s from '../../../../style/components/header.module.scss';

const HeaderMenu = () => {
    return (
        <div className={s.headerMenu}>
            <ul className={s.headerMenuList}>
                <li className={s.headerMenuItem}>
                    <Link className={s.headerMenuLink} to="/">
                        Home
                    </Link>
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
};

export default HeaderMenu;
