import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../Button';
import favourite from '../../../../assets/img/Page/iconProduct/favourite.svg';
import s from '../../../../style/page.module.scss';
import cn from 'classnames';

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavourite: false,
        };
    }

    componentDidMount() {
        const { product } = this.props;
        const productItemData = localStorage.getItem('productItem_' + product.article);
        if (productItemData) {
            const { isFavourite } = JSON.parse(productItemData);
            this.setState({ isFavourite });
        }
    }

    handleAddToFavourite = () => {
        const { isFavourite } = this.state;
        const { product } = this.props;
        const { onAddToFavourite, onDeleteFavourite, addFavouriteToLocalStorage, removeFromFavouriteToLocalStorage } = this.props;

        this.setState({
            isFavourite: !isFavourite,
        });

        if (!isFavourite) {
            onAddToFavourite(product);
            addFavouriteToLocalStorage(product);
            localStorage.setItem('productItem_' + product.article, JSON.stringify({ isFavourite: true }));
        } else {
            onDeleteFavourite(product);
            removeFromFavouriteToLocalStorage(product);
            localStorage.removeItem('productItem_' + product.article);
        }
    };

    render() {
        const { name, price, src, article } = this.props.product;
        const { openModal, product } = this.props;

        return (
            <>
                <li className={s.productItem}>
                    <a className={s.productLink} href="#">
                        <div className={s.productImg}>
                            <img src={src} alt={name}></img>
                        </div>
                    </a>
                    <div
                        onClick={() => {
                            this.handleAddToFavourite();
                        }}
                        className={cn(s.productIcon, this.state.isFavourite && s.active)}
                    >
                        <img src={favourite} alt={name}></img>
                    </div>
                    <div className={s.producrDesk}>
                        <div className={s.productTitle}>{name}</div>
                        <div className={s.productPrice}>{price}</div>
                        <div className={s.productArticle}>{`Артикул ${article}`}</div>
                    </div>
                    <Button
                        text={'Додати в кошик'}
                        onClick={() => {
                            openModal(product);
                        }}
                    ></Button>
                </li>
            </>
        );
    }
}

ProductItem.propTypes = {
    products: PropTypes.array,
    onAddToFavourite: PropTypes.func,
    onDeleteFavourite: PropTypes.func,
    handleAddToFavourite: PropTypes.func,
};

export default ProductItem;
