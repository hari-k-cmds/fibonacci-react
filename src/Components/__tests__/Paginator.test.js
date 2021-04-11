import { render, screen ,fireEvent} from '@testing-library/react';
import Paginator from '../Paginator'

test('renders Paginator', () => {
  render(<Paginator disabledPrev={false} disabledNext={false}  setActionData={jest.fn()}/>);
  const linkElementPrev = screen.getByText(/Prev 10/i);
  const linkElementNext = screen.getByText(/Next 10/i);
  fireEvent.click(linkElementPrev)
  fireEvent.click(linkElementNext)
  expect(linkElementNext).toBeInTheDocument();
  expect(linkElementPrev).toBeInTheDocument();

});


