import { isModalOpenAction } from '../redux/reducers/isModalOpenReducer';
import { types } from '../redux/types/types';

export const closeModal = (data, dispatch) => {
    dispatch({ type: types.REMOVE_MODAL_DATA, payload: data.article });
    dispatch(isModalOpenAction(false));

    document.body.style.overflow = 'auto';
};
