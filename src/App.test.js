import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

test('renders APP', () => {
  render(<App />);
  const linkElement = screen.getByText(/Quick sort/i);
  fireEvent.click(linkElement)
  const input = screen.getByRole('form');
  fireEvent.input(input, { target: { value: '2000' } })
  expect(linkElement).toBeInTheDocument();
});
