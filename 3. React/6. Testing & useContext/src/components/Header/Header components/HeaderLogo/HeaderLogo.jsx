import { Link } from 'react-router-dom';
import logo from '../../../../assets/img/Header/logo/logo.svg';
import s from '../../../../style/components/header.module.scss';

const HeaderLogo = () => {
    return (
        <div className={s.headerLogo}>
            <Link to="/">
                <img src={logo} alt={'logo'}></img>
            </Link>
        </div>
    );
};

export default HeaderLogo;
