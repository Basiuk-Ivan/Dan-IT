import '@testing-library/jest-dom';
import productsReducer, { getAllProducts } from '../../redux/slice/product';

describe('products reducer', () => {
    const initialState = {
        products: [],
    };

    const products = [
        { name: 'Product 1', article: 1 },
        { name: 'Product 2', article: 2 },
    ];

    test('should return data', () => {
        const newState = productsReducer(initialState, getAllProducts(products));

        expect(getAllProducts()).toBeDefined();
        expect(newState.products).toEqual(products);
        expect(newState.products).not.toBe(undefined);
    });
});
