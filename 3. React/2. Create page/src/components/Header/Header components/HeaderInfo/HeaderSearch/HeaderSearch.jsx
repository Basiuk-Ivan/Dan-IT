import { Component } from 'react';
import search from '../../../../../assets/img/Header/iconInfo/search.svg';
import s from '../../../../../style/header.module.scss';

class HeaderSearch extends Component {
    render() {
        return (
            <div className={s.headerSearch}>
                <a href="#">
                    <img src={search} alt={'search'}></img>
                </a>
            </div>
        );
    }
}

export default HeaderSearch;
