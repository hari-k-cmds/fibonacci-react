import { render, screen, fireEvent } from '@testing-library/react';
import FindCompositeOrPrimeStyle from '../FindCompositeOrPrimeStyle'

test('renders FindCompositeOrPrimeStyle Composite', () => {
    render(<FindCompositeOrPrimeStyle num={10} />);
    const linkElement = screen.getByText(/comp/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders FindCompositeOrPrimeStyle prime', () => {
    render(<FindCompositeOrPrimeStyle num={1597} />);
    const linkElement = screen.getByText(/prime/i);
    expect(linkElement).toBeInTheDocument();
});

