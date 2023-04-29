import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store/store';
import Header from '../../components/Header';
import LookBook from '../../components/Page/Home/LookBook';
import Footer from '../../components/Page/Home/Footer/Footer';

describe('snapshot Components', () => {
    test('snapshot Header', () => {
        const header = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        expect(header).toMatchSnapshot();
    });
    test('snapshot Footer', () => {
        const footer = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Footer />
                </Provider>
            </BrowserRouter>
        );
        expect(footer).toMatchSnapshot();
    });
    test('snapshot LookBook', () => {
        const lookBook = render(
            <BrowserRouter>
                <Provider store={store}>
                    <LookBook />
                </Provider>
            </BrowserRouter>
        );
        expect(lookBook).toMatchSnapshot();
    });
});
