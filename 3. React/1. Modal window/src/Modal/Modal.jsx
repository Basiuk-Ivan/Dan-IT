import { Component } from 'react';
import s from './Modal.module.scss';

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

export default Modal;
