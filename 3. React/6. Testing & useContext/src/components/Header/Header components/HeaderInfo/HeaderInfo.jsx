import HeaderSearch from './HeaderSearch';
import HeaderAccount from './HeaderAccount';
import HeaderFavourite from './HeaderFavourite';
import HeaderCart from './HeaderCart';
import s from '../../../../style/components/header.module.scss';

const HeaderInfo = () => {
    return (
        <div className={s.headerInfo}>
            <HeaderSearch />
            <HeaderAccount />
            <HeaderFavourite />
            <HeaderCart />
        </div>
    );
};

export default HeaderInfo;
