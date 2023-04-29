import '@testing-library/jest-dom';
import modalDataReducer, { getModalData, removeModalData, setIsModalOpen } from '../../redux/slice/modalData';

describe('favouriteItems reducer', () => {
    test('should getModalData', () => {
        const initialState = {
            modalData: [],
        };

        const item = [{ name: 'Product 1', article: 1 }];
        const newState = modalDataReducer(initialState, getModalData(item));

        expect(getModalData()).toBeDefined();
        expect(newState.modalData).toEqual(item);
        expect(newState.modalData).not.toBe(undefined);
    });

    test('should removeModalData', () => {
        const initialState = {
            modalData: [{ name: 'Product 1', article: 1 }],
        };

        const modalDataArticle = 1;
        const newState = modalDataReducer(initialState, removeModalData(modalDataArticle));

        expect(newState.modalData).toEqual([]);
    });

    test('should setIsModalOpen', () => {
        const initialState = {
            isModalOpen: false,
        };

        const isModalOpenTrue = true;
        const newState = modalDataReducer(initialState, setIsModalOpen(isModalOpenTrue));

        expect(newState.isModalOpen).toEqual(true);
    });
});
