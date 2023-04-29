import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../ProductItem';
import PhotoGallery from './PhotoGallery';
import LookBook from './LookBook/LookBook';
import Footer from './Footer/Footer';
import Modal from '../../Modal';
import { createModal } from '../../../utils/createModal';
import s from '../../../style/components/pageHome/pageHome.module.scss';

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const modalData = useSelector(state => state.modalData.modalData);
    const isModalOpen = useSelector(state => state.isModalOpen.isModalOpen);

    return (
        <>
            <PhotoGallery />
            <div className={s.catalog}>
                <div className={s.productsTitle}>Каталог</div>
                <ul className={s.productList}>{!!products?.length && products.map(product => <ProductItem key={product.article} product={product} showIconClose={false} />)}</ul>
                <Modal {...createModal(modalData, 'Home', 'Add', isModalOpen, dispatch)} />
            </div>
            <LookBook />
            <Footer />
        </>
    );
};

export default Home;
