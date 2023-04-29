import { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';
import Button from '../../../Button';
import Modal from '../../../Modal';
import s from '../../../../style/page.module.scss';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            modalData: {},
        };
    }

    openModal = data => {
        this.setState({
            openModal: true,
            modalData: data,
        });

        document.body.style.overflow = 'hidden';
    };

    closeModal = () => {
        this.setState({
            openModal: false,
        });

        document.body.style.overflow = 'auto';
    };

    handleAddToCart = data => {
        const { onAddCart, addCartToLocalStorage } = this.props;

        onAddCart(data);
        addCartToLocalStorage(data);
        this.closeModal();
    };

    createModal = data => {
        const modalText = (
            <div className={s.modalTextBlack}>
                <p>Ви додаєте товар до корзини. Ви впевнені?</p>
            </div>
        );

        const modalActions = (
            <div className={s.modalActions}>
                <Button text={'Відміна'} onClick={this.closeModal} />
                <Button text={`Так, я впевнений!`} onClick={() => this.handleAddToCart(this.state.modalData)} />
            </div>
        );

        const modalData = {
            opened: this.state.openModal,
            closed: this.closeModal,
            headerStyle: 'modalHeaderWhite',
            bodyStyle: 'modalBodyWhite',
            headerText: 'Ви впевнені?',
            iconClose: <div className={s.iconClose} onClick={this.closeModal}></div>,
            text: modalText,
            actions: modalActions,
        };

        return modalData;
    };

    render() {
        const { products, onAddToFavourite, onDeleteFavourite, addFavouriteToLocalStorage, removeFromFavouriteToLocalStorage, handleAddToFavourite } = this.props;

        return (
            <>
                <ul className={s.productList}>{!!products?.length && products.map(product => <ProductItem key={product.article} product={product} openModal={this.openModal} {...this.props} />)}</ul>
                <Modal {...this.createModal(this.state.modalData)}></Modal>
            </>
        );
    }
}

ProductList.propTypes = {
    products: PropTypes.array,
    onAddToFavourite: PropTypes.func,
    onDeleteFavourite: PropTypes.func,
    addFavouriteToLocalStorage: PropTypes.func,
    removeFromFavouriteToLocalStorage: PropTypes.func,
    handleAddToFavourite: PropTypes.func,
};

export default ProductList;
