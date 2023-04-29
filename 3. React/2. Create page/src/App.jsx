import { Component } from 'react';
import Header from './components/Header';
import Page from './components/Page';
import { request } from './tools/request';
import s from '../src/style/app.module.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            favouriteItems: [],
            cartItems: [],
        };
    }

    componentDidMount() {
        this.requestProducts();
    }

    requestProducts = async () => {
        const { res, err } = await request();

        if (res) {
            this.setState({
                products: res,
            });
        }

        if (err) {
            console.error(err);
        }
    };

    handleAddToFavourite = item => {
        this.setState(prevState => ({
            favouriteItems: [...prevState.favouriteItems, item],
        }));
    };

    handleRemoveFromFavourite = item => {
        this.setState(prevState => ({
            favouriteItems: prevState.favouriteItems.filter(favouriteItems => favouriteItems !== item),
        }));
    };

    addFavouriteToLocalStorage = data => {
        const favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
        favouriteItems.push(data);
        localStorage.setItem('favouriteItems', JSON.stringify(favouriteItems));
    };

    removeFromFavouriteLocalStorage = data => {
        const favouriteItems = JSON.parse(localStorage.getItem('favouriteItems')) || [];
        favouriteItems.pop(data);
        localStorage.setItem('favouriteItems', JSON.stringify(favouriteItems));
    };

    handleAddToCart = item => {
        this.setState(prevState => ({
            cartItems: [...prevState.cartItems, item],
        }));
    };

    addCartToLocalStorage = data => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(data);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    parseLocalStorageCart = () => {
        const productsLocalStore = localStorage.getItem('cartItems');
        const cartItems = JSON.parse(productsLocalStore) || [];

        return cartItems.length || 0;
    };

    parseLocalStorageFavourite = () => {
        const productsLocalStore = localStorage.getItem('favouriteItems');
        const favouriteItems = JSON.parse(productsLocalStore) || [];

        return favouriteItems.length || 0;
    };

    render() {
        const { products, favouriteItems, cartItems } = this.state;

        return (
            <div className={s.app}>
                <Header parseLocalStorageFavourite={this.parseLocalStorageFavourite} parseLocalStorage={this.parseLocalStorageCart} favouriteItems={favouriteItems} cartItems={cartItems} />
                <Page
                    addFavouriteToLocalStorage={this.addFavouriteToLocalStorage}
                    removeFromFavouriteToLocalStorage={this.removeFromFavouriteLocalStorage}
                    addCartToLocalStorage={this.addCartToLocalStorage}
                    products={products}
                    onAddToFavourite={this.handleAddToFavourite}
                    onDeleteFavourite={this.handleRemoveFromFavourite}
                    onAddCart={this.handleAddToCart}
                    handleAddToFavourite={this.handleAddToFavourite}
                />
            </div>
        );
    }
}

export default App;
