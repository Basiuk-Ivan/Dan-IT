import { useEffect, createContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getAllProducts } from './redux/slice/product';
import { request } from './tools/request';
import { Checkout } from './components/Page/Checkout/Checkout';
import Header from './components/Header';
import Home from './components/Page/Home';
import Favourite from './components/Page/Favourite/Favourite';
import Cart from './components/Page/Cart';
import s from '../src/style/app.module.scss';

export const ViewModeContext = createContext('BigCard');

const App = () => {
    const [viewMode, setViewMode] = useState('BigCard');
    const [isCardBig, setIsCardBig] = useState(true);
    const [isCardSmall, setIsCardSmall] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const fetchData = () => async dispatch => {
        const { res } = await request();
        dispatch(getAllProducts(res));
    };

    const handleSwitchMode = newMode => {
        setViewMode(newMode);
        setIsCardBig(!isCardBig);
        setIsCardSmall(!isCardSmall);
    };

    return (
        <div className={s.app}>
            <Header />
            <main className={s.main}>
                <ViewModeContext.Provider value={viewMode}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home
                                    handleSwitchMode={handleSwitchMode}
                                    isCardBig={isCardBig}
                                    isCardSmall={isCardSmall}
                                />
                            }
                        />
                        <Route path="/favourite" element={<Favourite />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/cart/checkout" element={<Checkout />} />
                    </Routes>
                </ViewModeContext.Provider>
            </main>
        </div>
    );
};

export default App;
