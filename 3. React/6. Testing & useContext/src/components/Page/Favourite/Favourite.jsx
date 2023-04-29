import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../ProductItem';
import Footer from '../Home/Footer/Footer';
import Modal from '../../Modal';
import { createModal } from '../../../utils/createModal';
import s from '../../../style/components/pageHome/pageHome.module.scss';

const Favourite = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector(state => state.modalData.isModalOpen);
    const modalData = useSelector(state => state.modalData.modalData);
    const favouriteItem = useSelector(state => state.favouriteItems.favouriteItems);

    return (
        <>
            <div className={s.productsTitle}>Улюблені товари</div>
            <ul className={s.productList}>{!!favouriteItem?.length && favouriteItem.map(product => <ProductItem key={product.article} product={product} isHome={true} />)}</ul>
            <Modal {...createModal(modalData, 'Home', 'Add', isModalOpen, dispatch)} />
            <Footer />
        </>
    );
};

export default Favourite;
