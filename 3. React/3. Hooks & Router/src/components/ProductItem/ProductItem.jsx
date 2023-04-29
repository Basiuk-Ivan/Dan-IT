import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import favourite from '../../assets/img/Page/iconProduct/favourite.svg';
import close from '../../assets/img/Page/iconProduct/close.svg';
import sItem from '../../style/components/productItem.module.scss';
import cn from 'classnames';

const ProductItem = props => {
    const { product, handleAddToFavourite, handleRemoveFromFavourite, openModal, showIconClose } = props;
    const { name, price, src, article } = product;
    
    const [isFavourite, setIsFavourite] = useState(false);
    const [isCart, setIsCart] = useState(false);

    useEffect(() => {
        const productItemFavourite = localStorage.getItem('favouriteItem_' + product.article);
        const productItemCart = localStorage.getItem('cartItem_' + product.article);

        if (productItemFavourite) {
            const { isFavourite } = JSON.parse(productItemFavourite);
            setIsFavourite(isFavourite);
        }

        if (productItemCart) {
            const { isCart } = JSON.parse(productItemCart);
            setIsCart(isCart);
        }
    }, []);

    useEffect(() => {
        const productItemCart = localStorage.getItem('cartItem_' + product.article);
        if (productItemCart) {
          const { isCart } = JSON.parse(productItemCart);
          setIsCart(isCart);
        }
      }, [localStorage.getItem('cartItem_' + product.article)]);

    const addToFavourite = () => {
        setIsFavourite(!isFavourite);

        if (!isFavourite) {
            handleAddToFavourite(product);
            localStorage.setItem('favouriteItem_' + product.article, JSON.stringify({ isFavourite: true }));
        } else {
            handleRemoveFromFavourite(product);
            localStorage.removeItem('favouriteItem_' + product.article);
        }
    };

    const buttonText = {
        add: 'Додати в кошик',
        added: 'У корзині',
    };

    return (
        <>
            <li className={sItem.productItem}>
                <div className={sItem.productImg}>
                    <img src={src} alt={name}></img>
                </div>

                {!!showIconClose && (
                    <div
                        className={sItem.closeIcon}
                        onClick={() => {
                            openModal(product);
                        }}
                    >
                        <img src={close} alt={name}></img>
                    </div>
                )}

                <div
                    className={cn(sItem.productIcon, isFavourite && sItem.active)}
                    onClick={() => {
                        addToFavourite();
                    }}
                >
                    <img src={favourite} alt={name}></img>
                </div>
                <div className={sItem.producrDesk}>
                    <div className={sItem.productTitle}>{name}</div>
                    <div className={sItem.productPrice}>{price}</div>
                    <div className={sItem.productArticle}>{`Артикул ${article}`}</div>
                </div>

                {!isCart ? (
                <Button
                    text={buttonText.add}
                    onClick={() => {
                        openModal(product);
                    }}
                />
                 ) : (
                    <Button text={buttonText.added} />
                )}
            </li>
        </>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object,
    handleAddToFavourite: PropTypes.func,
    handleRemoveFromFavourite: PropTypes.func,
    openModal: PropTypes.func,
    showIconClose: PropTypes.bool,
};

export default ProductItem;
