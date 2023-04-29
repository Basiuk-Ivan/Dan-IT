import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import favourite from '../../../../../assets/img/Header/iconInfo/favourite.svg';
import s from '../../../../../style/components/header.module.scss';

const HeaderFavourite = () => {
    const favouriteItem = useSelector(state => state.favouriteItems.favouriteItems);

    return (
        <div className={s.headerFavourite}>
            <Link to="/favourite">
                <img src={favourite} alt={'vafourite'}></img>
            </Link>
            {favouriteItem.length}
        </div>
    );
};

export default HeaderFavourite;
