import { Link } from 'react-router-dom';
import s from '../../../../style/components/header.module.scss';

const HeaderMenu = () => {
    const headerMenuItem = ['Home', 'LookBook', 'Про бренд', 'Інформація'];

    return (
        <div className={s.headerMenu}>
            <ul className={s.headerMenuList}>
                {headerMenuItem.map(item => (
                    <li className={s.headerMenuItem} key={item}>
                        {item === 'Home' ? (
                            <Link className={s.headerMenuLink} to="/">
                                {item}
                            </Link>
                        ) : (
                            <a className={s.headerMenuLink} href="#">
                                {item}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeaderMenu;
