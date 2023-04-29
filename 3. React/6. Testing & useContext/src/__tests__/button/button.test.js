import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button component', () => {
    const handleClick = jest.fn();
    const text = 'Click me';

    test('renders text and handles click', () => {
        render(<Button onClick={handleClick} text={text} />);

        const button = screen.getByRole('button', { name: 'Click me' });
        fireEvent.click(button);

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Click me');
        expect(handleClick).toHaveBeenCalled();
    });
});
