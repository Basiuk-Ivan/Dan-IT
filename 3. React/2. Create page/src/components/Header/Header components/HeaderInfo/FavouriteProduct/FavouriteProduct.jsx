import { Component } from 'react';
import PropTypes from 'prop-types';
import favourite from '../../../../../assets/img/Header/iconInfo/favourite.svg';
import s from '../../../../../style/header.module.scss';
import cn from 'classnames';

class FavouriteProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IsFavouriteItems: false,
        };
    }

    isFavouriteItems = () => {
        const { favouriteItems } = this.props;

        if (!!favouriteItems.length >= 1) {
            this.setState({
                IsFavouriteItems: true,
            });
        }
    };

    render() {
        const { parseLocalStorageFavourite } = this.props;

        return (
            <div className={cn(s.headerFavourite, this.state.IsFavouriteItems && s.active)}>
                <a href="#">
                    <img src={favourite} alt={'vafourite'}></img>
                    {parseLocalStorageFavourite()}
                    {/* {favouriteItems.length} */}
                </a>

                {/* <ul>
                        {cartItems.map(item => {
                            console.log(item);
                            return (
                                <li>
                                    {item.name} - {item.price}
                                </li>
                            );
                        })}
                    </ul> */}
            </div>
        );
    }
}

FavouriteProduct.propTypes = {
    favouriteItems: PropTypes.array,
    parseLocalStorageFavourite: PropTypes.func,
};

export default FavouriteProduct;
