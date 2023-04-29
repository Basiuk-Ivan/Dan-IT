import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Page/Home';
import Favourite from './components/Page/Favourite/Favourite';
import Cart from './components/Page/Cart';
import Button from './components/Button';
import { request } from './tools/request';
import s from '../src/style/app.module.scss';
import sModal from './style/utils/modal.module.scss';
import sButton from './style/utils/button.module.scss';

const App = () => {
    const [products, setProduct] = useState([]);
    const [favouriteItems, setFavouriteItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const { res, err } = await request();

        if (res) {
            setProduct(res);
        }

        if (err) {
            console.error(err);
        }
    };

    const openModal = (data) => {
        setIsModalOpen(true);
        setModalData(data);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleAddToFavourite = data => {
        setFavouriteItems(prevState => [...prevState, data]);

        const favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
        favouriteItems.push(data);
        localStorage.setItem('favouriteItems', JSON.stringify(favouriteItems));
    };

    const handleRemoveFromFavourite = data => {
        setFavouriteItems(prevState => prevState.filter(favouriteItem => favouriteItem !== data));

        const favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
        const updatedItems = favouriteItems.filter(item => item.article !== data.article);
        localStorage.setItem('favouriteItems', JSON.stringify(updatedItems));
    };

    // ========================================= //

    const handleAddToCart = data => {
        setCartItems(prevState => [...prevState, data]);
        
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(data);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('cartItem_' + data.article, JSON.stringify({ isCart: true }));
        closeModal();
    };

    const handleRemoveFromCart = data => {
        setCartItems(prevState => prevState.filter(cartItem => cartItem !== data));
        
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const updatedItems = cartItems.filter(item => item.article !== data.article);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        localStorage.removeItem('cartItem_' + data.article);

        closeModal();
    };

    // ========================================= //

    const createModal = (data, textModal, actions) => {
        const modalTextChose = {
            add: 'Ви додаєте товар до корзини. Ви впевнені?',
            delete: 'Ви видаляєте товар з корзини. Ви впевнені?',
        };

        const modalTextAdd = (
            <div className={sModal.modalText}>
                <p>{modalTextChose.add}</p>
            </div>
        );

        const modalTextDelete = (
            <div className={sModal.modalText}>
                <p>{modalTextChose.delete}</p>
            </div>
        );

        const modalActions = (
            <div className={sButton.modalActions}>
                <Button text={'Відміна'} onClick={() => closeModal()} />
                <Button text={`Так, я впевнений!`} onClick={() => (actions === 'Add' ? handleAddToCart(data) : actions === 'Delete' ? handleRemoveFromCart(data) : null)} />
            </div>
        );

        const modalData = {
            opened: isModalOpen,
            closed: closeModal,
            headerStyle: 'modalHeader',
            bodyStyle: 'modalBody',
            headerText: 'Ви впевнені?',
            iconClose: <div className={sModal.iconClose} onClick={() => closeModal()}></div>,
            text: textModal === 'Home' ? modalTextAdd : textModal === 'Delete' ? modalTextDelete : null,
            actions: modalActions,
        };

        return modalData;
    };

    return (
        <div className={s.app}>
            <Header />
            <main className={s.main}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                products={products}
                                handleAddToFavourite={handleAddToFavourite}
                                handleRemoveFromFavourite={handleRemoveFromFavourite}
                                openModal={openModal}
                                createModal={createModal}
                                modalData={modalData}
                            />
                        }
                    />
                    <Route
                        path="/favourite"
                        element={
                            <Favourite
                                handleAddToFavourite={handleAddToFavourite}
                                handleRemoveFromFavourite={handleRemoveFromFavourite}
                                openModal={openModal}
                                createModal={createModal}
                                modalData={modalData}
                            />
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <Cart
                                openModal={openModal}
                                createModal={createModal}
                                modalData={modalData}
                                handleAddToFavourite={handleAddToFavourite}
                                handleRemoveFromFavourite={handleRemoveFromFavourite}
                            />
                        }
                    />
                </Routes>
            </main>
        </div>
    );
};

export default App;
