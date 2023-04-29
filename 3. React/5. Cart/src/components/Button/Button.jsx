import PropTypes from 'prop-types';
import s from '../../style/components/button.module.scss';

const Button = props => {
    const { onClick, text } = props;

    return (
        <button className={s.button} onClick={onClick}>
            {text}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
};

export default Button;
