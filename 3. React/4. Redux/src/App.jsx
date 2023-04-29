import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getProductsAction } from './redux/reducers/productReducer';
import { request } from './tools/request';
import Header from './components/Header';
import Home from './components/Page/Home';
import Favourite from './components/Page/Favourite/Favourite';
import Cart from './components/Page/Cart';
import s from '../src/style/app.module.scss';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const fetchData = () => async dispatch => {
        const { res } = await request();
        dispatch(getProductsAction(res));
    };

    return (
        <div className={s.app}>
            <Header />
            <main className={s.main}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favourite" element={<Favourite />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
