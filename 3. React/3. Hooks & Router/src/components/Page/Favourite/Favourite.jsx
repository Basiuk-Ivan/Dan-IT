import ProductItem from '../../ProductItem';
import Modal from '../../Modal';
import s from '../../../style/components/page/pageHome.module.scss';

const Favourite = props => {
    const { handleAddToFavourite, handleRemoveFromFavourite, openModal, createModal, modalData } = props;

    const getFavouriteProducts = localStorage.getItem('favouriteItems');
    const parseFavouriteProducts = JSON.parse(getFavouriteProducts);

    return (
        <>
            <div className={s.productsTitle}>Улюблені товари</div>
            <ul className={s.productList}>{!!parseFavouriteProducts?.length && parseFavouriteProducts.map(product => <ProductItem key={product.article} product={product} {...props} />)}</ul>
            <Modal {...createModal(modalData, 'Home', 'Add')} />
        </>
    );
};

export default Favourite;
