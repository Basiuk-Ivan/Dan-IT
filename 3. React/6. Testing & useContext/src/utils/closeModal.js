import { setIsModalOpen, removeModalData } from '../redux/slice/modalData';

export const closeModal = (data, dispatch) => {
    dispatch(removeModalData(data.article));
    dispatch(setIsModalOpen(false));

    document.body.style.overflow = 'auto';
};
