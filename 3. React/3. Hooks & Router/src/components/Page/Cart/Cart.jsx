import ProductItem from '../../ProductItem';
import Modal from '../../Modal';
import s from '../../../style/components/page/pageHome.module.scss';

const Cart = props => {
    const { openModal, createModal, modalData, handleAddToFavourite, handleRemoveFromFavourite } = props;

    const getCartProducts = localStorage.getItem('cartItems');
    const parseCartProducts = JSON.parse(getCartProducts);

    return (
        <>
            <div className={s.productsTitle}>Корзина</div>
            <div className={s.cartList}>
                <ul className={s.productList}>
                    {!!parseCartProducts?.length && parseCartProducts.map(product => <ProductItem key={product.article} product={product} showIconClose={true} {...props} />)}
                </ul>
                <Modal {...createModal(modalData, 'Delete', 'Delete')} />
            </div>
        </>
    );
};

export default Cart;
