import { render, screen, fireEvent } from '../shared/test-utils';
import SearchForm from './SearchForm';

test('should render properly, and user should enter a value to it', () => {
  render(<SearchForm />);
  const input = screen.getByPlaceholderText(
    /Search for any IP address or domain/
  );
  const button = screen.getByRole('button', { name: /search ip or domain/i });
  fireEvent.input(input, { target: { value: 'example' } });
  fireEvent.click(button);
});
