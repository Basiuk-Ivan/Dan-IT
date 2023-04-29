import { handleRemoveFromCart } from './handleRemoveFromCart';
import { handleAddToCart } from './handleAddToCart';
import { closeModal } from './closeModal';
import Button from '../components/Button';
import sModal from '../style/components/modal.module.scss';
import sButton from '../style/components/button.module.scss';

const handleCloseModal = (data, dispatch) => {
    closeModal(data, dispatch);
};

export const createModal = (data, textModal, actions, isModalOpen, dispatch) => {
    const modalTextBody = {
        add: 'Ви додаєте товар до корзини. Ви впевнені?',
        delete: 'Ви видаляєте товар з корзини. Ви впевнені?',
    };

    const modalTextAdd = (
        <div className={sModal.modalText}>
            <p>{modalTextBody.add}</p>
        </div>
    );

    const modalTextDelete = (
        <div className={sModal.modalText}>
            <p>{modalTextBody.delete}</p>
        </div>
    );

    const handleClick = () => {
        if (actions === 'Add') {
            handleAddToCart(data, dispatch);
        } else if (actions === 'Delete') {
            handleRemoveFromCart(data, dispatch);
        }
    };

    const modalActions = (
        <div className={sButton.modalActions}>
            <Button text={'Відміна'} onClick={() => handleCloseModal(data, dispatch)} />
            <Button text={`Так, я впевнений!`} onClick={handleClick} />
        </div>
    );

    const modalText = textModal === 'Home' ? modalTextAdd : textModal === 'Delete' ? modalTextDelete : null;

    const modalData = {
        opened: isModalOpen,
        closed: handleCloseModal,
        headerStyle: 'modalHeader',
        bodyStyle: 'modalBody',
        headerText: 'Ви впевнені?',
        iconClose: <div className={sModal.iconClose} onClick={() => handleCloseModal(data, dispatch)}></div>,
        text: modalText,
        actions: modalActions,
    };

    return modalData;
};
