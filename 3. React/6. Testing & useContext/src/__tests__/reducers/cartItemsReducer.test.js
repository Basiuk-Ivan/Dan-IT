import '@testing-library/jest-dom';
import cartItemsReducer, { addToCartItems, deleteFromCartItems, clearCart } from '../../redux/slice/cartItems';

describe('cartItemsReducer', () => {
    test('should add item to cartItems', () => {
        const initialState = {
            cartItems: [],
        };

        const item = [
            { name: 'Product 1', article: 1 },
            { name: 'Product 2', article: 2 },
        ];

        const newState = cartItemsReducer(initialState, addToCartItems(item));

        expect(addToCartItems()).toBeDefined();
        expect(newState.cartItems.length).toEqual(1);
    });

    test('should delete item from cartItems', () => {
        const initialState = {
            cartItems: [
                {
                    article: '1234',
                    name: 'Product 1',
                },
                {
                    article: '5678',
                    name: 'Product 2',
                },
            ],
        };

        const cartArticle = '1234';
        const newState = cartItemsReducer(initialState, deleteFromCartItems(cartArticle));

        expect(newState.cartItems.length).toEqual(1);
    });

    test('should clear cart', () => {
        const initialState = {
            cartItems: [
                {
                    article: '1234',
                    name: 'Product 1',
                },
                {
                    article: '5678',
                    name: 'Product 2',
                },
            ],
        };

        const newState = cartItemsReducer(initialState, clearCart());

        expect(newState.cartItems).toEqual([]);
    });
});
