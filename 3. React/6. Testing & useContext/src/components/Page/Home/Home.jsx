import { useDispatch, useSelector } from 'react-redux';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ViewModeContext } from '../../../App';
import ProductItem from '../../ProductItem';
import PhotoGallery from './PhotoGallery';
import LookBook from './LookBook/LookBook';
import Footer from './Footer/Footer';
import Modal from '../../Modal';
import { createModal } from '../../../utils/createModal';
import smallSwitch from '../../../assets/img/Page/iconProduct/switch/small.svg';
import mediumSwitch from '../../../assets/img/Page/iconProduct/switch/medium.svg';
import sHome from '../../../style/components/pageHome/pageHome.module.scss';
import cn from 'classnames';

const Home = ({ handleSwitchMode, isCardBig, isCardSmall }) => {
    const viewMode = useContext(ViewModeContext);

    const dispatch = useDispatch();

    const products = useSelector(state => state.products.products);
    const modalData = useSelector(state => state.modalData.modalData);
    const isModalOpen = useSelector(state => state.modalData.isModalOpen);

    return (
        <>
            <PhotoGallery />
            <div className={sHome.catalog}>
                <div className={sHome.productsTitle}>Каталог</div>
                <div className={sHome.switch}>
                    <div
                        onClick={() => handleSwitchMode('BigCard')}
                        className={cn(sHome.cardBig, isCardBig && sHome.active)}
                    >
                        <img title="Велика плитка" src={mediumSwitch} alt="medium"></img>
                    </div>
                    <div
                        onClick={() => handleSwitchMode('SmallCard')}
                        className={cn(sHome.cardSmall, isCardSmall && sHome.active)}
                    >
                        <img title="Маленька плитка" src={smallSwitch} alt="small"></img>
                    </div>
                </div>
                <ul className={viewMode === 'BigCard' ? sHome.productListCard : sHome.productListTable}>
                    {!!products?.length &&
                        products.map(product => (
                            <ProductItem key={product.article} product={product} showIconClose={false} isHome={true} />
                        ))}
                </ul>

                <Modal {...createModal(modalData, 'Home', 'Add', isModalOpen, dispatch)} />
            </div>
            <LookBook />
            <Footer />
        </>
    );
};

Home.propTypes = {
    handleSwitchMode: PropTypes.func,
    isCardBig: PropTypes.bool,
    isCardSmall: PropTypes.bool,
};

export default Home;
