import { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../../style/modal.module.scss';

class Modal extends Component {
    handleClose = () => {
        this.props.closed(false);
    };

    render() {
        const { opened, headerStyle, bodyStyle, headerText, text, iconClose, actions } = this.props;

        return (
            !!opened && (
                <div className={s.modalWrap} onClick={this.handleClose}>
                    <div className={s[bodyStyle]} onClick={e => e.stopPropagation()}>
                        <div className={s[headerStyle]}>
                            <div>{headerText}</div>
                            <div className={s.modalIconWrapp} onClick={this.handleClose}>
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
    }
}

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
