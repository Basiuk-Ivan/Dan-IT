import search from '../../../../../assets/img/Header/iconInfo/search.svg';
import s from '../../../../../style/components/header.module.scss';

const HeaderSearch = () => {
    return (
        <div className={s.headerSearch}>
                <img src={search} alt={'search'}></img>
        </div>
    );
};

export default HeaderSearch;
