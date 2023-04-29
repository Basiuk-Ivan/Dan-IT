import { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../../style/page.module.scss';

class Button extends Component {
    render() {
        const { onClick, text } = this.props;

        return (
            <button className={s.button} onClick={onClick}>
                {text}
            </button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
};

export default Button;
