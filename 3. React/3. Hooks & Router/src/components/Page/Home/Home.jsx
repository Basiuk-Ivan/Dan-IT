import PropTypes from 'prop-types';
import ProductItem from '../../ProductItem';
import PhotoGallery from './PhotoGallery';
import LookBook from './LookBook/LookBook';
import Footer from './Footer/Footer';
import Modal from '../../Modal';
import s from '../../../style/components/page/pageHome.module.scss';

const Home = props => {
    const { products, handleAddToFavourite, handleRemoveFromFavourite, openModal, createModal, modalData} = props;

    return (
        <>
            <PhotoGallery/>
        <div className={s.catalog}>
            <div className={s.productsTitle}>Каталог</div>
            <ul className={s.productList}>{!!products?.length && products.map(product => <ProductItem key={product.article} product={product} showIconClose={false} {...props} />)}</ul>
            <Modal {...createModal(modalData, 'Home', 'Add')} />
        </div>
            <LookBook/>
            <Footer/>
        </>
    );
};

Home.propTypes = {
    products: PropTypes.array,
    handleAddToFavourite: PropTypes.func,
    handleRemoveFromFavourite: PropTypes.func,
    openModal: PropTypes.func,
    createModal: PropTypes.func,
    modalData: PropTypes.object,
};

export default Home;
