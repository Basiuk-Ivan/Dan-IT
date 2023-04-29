import { Component } from 'react';
import PropTypes from 'prop-types';
import ProductList from './Page componens/ProductList/ProductList';
import s from '../../style/page.module.scss';

class Page extends Component {
    render() {
        const { products, onAddToFavourite, onDeleteFavourite, onAddCart, addCartToLocalStorage, addFavouriteToLocalStorage, removeFromFavouriteToLocalStorage, handleAddToFavourite } = this.props;
        return (
            <main className={s.page}>
                <div className={s.productCard}>
                    <div className={s.productsTitle}>Каталог</div>
                    <ProductList {...this.props} />
                </div>
            </main>
        );
    }
}

Page.propTypes = {
    products: PropTypes.array,
    onAddToFavourite: PropTypes.func,
    onDeleteFavourite: PropTypes.func,
    onAddCart: PropTypes.func,
    addCartToLocalStorage: PropTypes.func,
    addFavouriteToLocalStorage: PropTypes.func,
    removeFromFavouriteToLocalStorage: PropTypes.func,
    handleAddToFavourite: PropTypes.func,
};

export default Page;
