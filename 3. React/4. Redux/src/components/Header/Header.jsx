import HeaderMenu from './Header components/HeaderMenu';
import HeaderInfo from './Header components/HeaderInfo';
import HeaderLogo from './Header components/HeaderLogo/HeaderLogo';
import s from '../../style/components/header.module.scss';

const Header = () => {
    return (
        <header className={s.header}>
            <HeaderMenu />
            <HeaderLogo />
            <HeaderInfo />
        </header>
    );
};

export default Header;
