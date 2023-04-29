import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import Modal from '../../components/Modal';

describe('Modal component', () => {
    const initialState = { modalData: { isModalOpen: false } };

    const modalSlice = createSlice({
        name: 'Сlose modal',
        initialState,
        reducers: {
            closeModal: state => {
                state.isModalOpen = false;
            },
        },
    });

    const reducerSlice = modalSlice.reducer;
    const { closeModal } = modalSlice.actions;

    const renderModal = store =>
        render(
            <Provider store={store}>
                <Modal
                    opened={true}
                    headerStyle="header"
                    bodyStyle="body"
                    headerText="Header Text"
                    text={<p>Body Text</p>}
                    iconClose={<button>Close</button>}
                    actions={<button>OK</button>}
                    closed={(isModalOpen, dispatch) => dispatch(closeModal)}
                />
            </Provider>
        );

    test('renders modal component with correct header text', () => {
        const store = configureStore({
            reducer: reducerSlice,
        });
        const { getByText } = renderModal(store);
        const header = getByText('Header Text');
        expect(header).toBeInTheDocument();
    });

    test('clicking the close icon should call closed function', () => {
        const store = configureStore({
            reducer: reducerSlice,
        });
        const spy = jest.spyOn(store, 'dispatch');
        const { getByRole } = renderModal(store);
        const closeIcon = getByRole('button', { name: 'Close' });
        fireEvent.click(closeIcon);
        expect(spy).toHaveBeenCalledWith(closeModal);
    });
});
