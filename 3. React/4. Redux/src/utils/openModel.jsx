import { isModalOpenAction } from '../redux/reducers/isModalOpenReducer';
import { getModalDataAction } from '../redux/reducers/modalDataReducer';

export const openModal = (data, dispatch) => {
    dispatch(isModalOpenAction(true));
    dispatch(getModalDataAction(data));

    document.body.style.overflow = 'hidden';
};
