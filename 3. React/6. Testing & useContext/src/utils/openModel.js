import { getModalData, setIsModalOpen } from '../redux/slice/modalData';

export const openModal = (data, dispatch) => {
    dispatch(getModalData(data));
    dispatch(setIsModalOpen(true));

    document.body.style.overflow = 'hidden';
};
