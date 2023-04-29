import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from '../../style/components/modal.module.scss';

const Modal = props => {
    const { opened, headerStyle, bodyStyle, headerText, text, iconClose, actions } = props;

    const dispatch = useDispatch();
    const IsModalOpen = useSelector(state => state.isModalOpen.isModalOpen);

    const handleClose = () => {
        props.closed(IsModalOpen, dispatch);
    };

    return (
        !!opened && (
            <div className={s.modalWrap} onClick={() => handleClose()}>
                <div className={s[bodyStyle]} onClick={e => e.stopPropagation()}>
                    <div className={s[headerStyle]}>
                        <div>{headerText}</div>
                        <div className={s.modalIconWrapp} onClick={() => handleClose()}>
                            {iconClose}
                        </div>
                    </div>
                    <div className={s.modalMain}>
                        {text}
                        {actions}
                    </div>
                </div>
            </div>
        )
    );
};

Modal.propTypes = {
    opened: PropTypes.bool,
    headerStyle: PropTypes.string,
    bodyStyle: PropTypes.string,
    headerText: PropTypes.string,
    text: PropTypes.object,
    iconClose: PropTypes.node,
    actions: PropTypes.node,
};

export default Modal;
