import { Component } from 'react';
import s from './Button.module.scss';
import cn from 'classname';

class Button extends Component {
    render() {
        const { background, text, onClick } = this.props;

        return (
            <button className={cn(s.button, s[background])} onClick={onClick}>
                {text}
            </button>
        );
    }
}

export default Button;
