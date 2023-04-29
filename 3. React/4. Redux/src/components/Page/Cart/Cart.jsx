import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../ProductItem';
import Modal from '../../Modal';
import { createModal } from '../../../utils/createModal';
import s from '../../../style/components/pageHome/pageHome.module.scss';

const Cart = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector(state => state.isModalOpen.isModalOpen);
    const modalData = useSelector(state => state.modalData.modalData);
    const cartItems = useSelector(state => state.cartItems.cartItems);

    return (
        <>
            <div className={s.productsTitle}>Корзина</div>
            <div className={s.cartList}>
                <ul className={s.productList}>{!!cartItems?.length && cartItems.map(product => <ProductItem key={product.article} product={product} showIconClose={true} />)}</ul>
                <Modal {...createModal(modalData, 'Delete', 'Delete', isModalOpen, dispatch)} />
            </div>
        </>
    );
};

export default Cart;
