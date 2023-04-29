import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createModal } from '../../../utils/createModal';
import Footer from '../Home/Footer/Footer';
import ProductItem from '../../ProductItem';
import Modal from '../../Modal';
import sCart from '../../../style/components/pageCart/pageCart.module.scss';
import cn from 'classnames';

const Cart = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector(state => state.isModalOpen.isModalOpen);
    const modalData = useSelector(state => state.modalData.modalData);
    const cartItems = useSelector(state => state.cartItems.cartItems);

    const total = cartItems.reduce((acum, product) => {
        return acum + product.price;
    }, 0);

    const currency = cartItems.find(prod => prod.currency)?.currency;

    return (
        <>
            <div className={sCart.productsTitle}>Корзина</div>
            <div className={sCart.cartInfo}>
                <ul className={sCart.cartList}>{!!cartItems?.length && cartItems.map(product => <ProductItem key={product.article} product={product} showIconClose={true} />)}</ul>
                <Modal {...createModal(modalData, 'Delete', 'Delete', isModalOpen, dispatch)} />
                <div className={sCart.orderTotalBlock}>
                    <div className={sCart.orderTotalBlockBody}>
                        <div className={sCart.totalPrice}>
                            <div className={sCart.totalPriceTitle}>Сума замовлення</div>
                            <div className={sCart.price}>
                                <div>{total}</div>
                                <div>{currency}</div>
                            </div>
                        </div>

                        <div className={sCart.totalPrice}>
                            <div className={sCart.totalPriceTitle}>Знижка</div>
                            <div className={sCart.price}>
                                <div>0</div>
                                <div>{currency}</div>
                            </div>
                        </div>

                        <div className={cn(sCart.totalPrice, sCart.finalyPrice)}>
                            <div className={sCart.priceTitle}>Загальна сума</div>
                            <div className={sCart.price}>
                                <div>{total}</div>
                                <div>{currency}</div>
                            </div>
                        </div>
                    </div>

                    {cartItems.length ? (
                        <Link to="checkout" className={sCart.buttonCart}>
                            Оформити замовлення
                        </Link>
                    ) : (
                        <div className={sCart.buttonCart}>Товарів у корзині немає</div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
