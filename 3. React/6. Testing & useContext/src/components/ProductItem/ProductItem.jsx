import { useEffect, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addToFavouriteLocalStor } from '../../utils/addToFavouriteLocalStor';
import { removeFromFavouriteLocalStor } from '../../utils/removeFromFavouriteLocalStor';
import { addToFavouriteItems, deleteFromFavouriteItems } from '../../redux/slice/favouriteItems';
import { ViewModeContext } from '../../App';
import { openModal } from '../../utils/openModel';
import favourite from '../../assets/img/Page/iconProduct/favourite.svg';
import close from '../../assets/img/Page/iconProduct/close.svg';
import sItem from '../../style/components/pageHome/productItem.module.scss';
import Button from '../Button';
import cn from 'classnames';

const ProductItem = props => {
    const { product, showIconClose, isHome } = props;
    const { name, price, src, article, currency } = product;

    const [isFavourite, setIsFavourite] = useState(false);
    const [isCart, setIsCart] = useState(false);

    const dispatch = useDispatch();

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
            dispatch(addToFavouriteItems(product));
            addToFavouriteLocalStor(product);
        } else {
            dispatch(deleteFromFavouriteItems(product.article));
            removeFromFavouriteLocalStor(product);
        }
    };

    const buttonText = {
        add: 'Додати в кошик',
        added: 'У корзині',
    };

    const handleOpenModal = data => {
        openModal(data, dispatch);
    };

    const viewMode = useContext(ViewModeContext);

    return (
        <>
            <li
                className={cn(sItem.productItem, {
                    [sItem.productItemHomeBig]: isHome && viewMode === 'BigCard',
                    [sItem.productItemHomeSmall]: isHome && viewMode !== 'BigCard',
                    [sItem.productItemCart]: !isHome,
                    [sItem.productImgHome]: isHome,
                    [sItem.productImgCart]: !isHome,
                })}
            >
                <div
                    className={cn(sItem.productItem, {
                        [sItem.productImgHomeBig]: isHome && viewMode === 'BigCard',
                        [sItem.productImgHomeSmall]: isHome && viewMode !== 'BigCard',
                        [sItem.productItemCart]: !isHome,
                    })}
                >
                    <img className={sItem.img} src={src} alt={name}></img>
                </div>
                {!!showIconClose && (
                    <div
                        className={sItem.closeIcon}
                        onClick={() => {
                            handleOpenModal(product);
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
                    <div
                        className={cn(sItem.productItem, {
                            [sItem.productTitle]: isHome,
                            [sItem.productTitleCart]: !isHome,
                        })}
                    >
                        {name}
                    </div>
                    <div
                        className={cn(sItem.productItem, {
                            [sItem.productPrice]: isHome,
                            [sItem.productPriceCart]: !isHome,
                        })}
                    >
                        <div>{price}</div>
                        <div>{currency}</div>
                    </div>
                    <div className={sItem.productArticle}>{`Артикул ${article}`}</div>
                </div>
                {!isCart ? (
                    <Button
                        text={buttonText.add} // true - додати в кошик
                        onClick={() => {
                            handleOpenModal(product);
                        }}
                    />
                ) : (
                    <Button text={buttonText.added} /> // false - У корзині
                )}
            </li>
        </>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object,
    showIconClose: PropTypes.bool,
    isHome: PropTypes.bool,
};

export default ProductItem;
