import '@testing-library/jest-dom';
import favouriteItemsReducer, { addToFavouriteItems, deleteFromFavouriteItems } from '../../redux/slice/favouriteItems';

describe('favouriteItems reducer', () => {
    test('should add item to favouriteItems', () => {
        const initialState = {
            favouriteItems: [],
        };

        const item = [
            { name: 'Product 1', article: 1 },
            { name: 'Product 2', article: 2 },
        ];

        const newState = favouriteItemsReducer(initialState, addToFavouriteItems(item));

        expect(addToFavouriteItems()).toBeDefined();
        expect(newState.favouriteItems.length).toEqual(1);
    });

    test('should delete item from favouriteItems', () => {
        const initialState = {
            favouriteItems: [
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

        const favouriteArticle = '1234';
        const newState = favouriteItemsReducer(initialState, deleteFromFavouriteItems(favouriteArticle));

        expect(newState.favouriteItems.length).toEqual(1);
    });
});
