import { Link } from 'react-router-dom';
import favourite from '../../../../../assets/img/Header/iconInfo/favourite.svg';
import s from '../../../../../style/components/header.module.scss';

const HeaderFavourite = () => {
    const parseLocalStorageFavourite = () => {
        const productsLocalStore = localStorage.getItem('favouriteItems');
        const favouriteItems = JSON.parse(productsLocalStore) || [];

        return favouriteItems.length || 0;
    };

    return (
        <div className={s.headerFavourite}>
            <Link to="/favourite">
                <img src={favourite} alt={'vafourite'}></img>
            </Link>
            {parseLocalStorageFavourite()}
        </div>
    );
};

export default HeaderFavourite;
