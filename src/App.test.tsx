// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well

import {
  render,
  screen,
  fireEvent,
  waitFor,
  handlers,
} from './shared/test-utils';
import '@testing-library/jest-dom/extend-expect';

import { setupServer } from 'msw/node';
import App from './App';

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('user should see his IP data on start', async () => {
  render(<App />);
  expect(await screen.findByText(/127.0.0.1/)).toBeInTheDocument();
  expect(await screen.findByText(/Good Response/)).toBeInTheDocument();
});

test('user should recive proper results after filling search value and clicking button', async () => {
  render(<App />);

  expect(await screen.findByText(/Good Response/)).toBeInTheDocument();
  const input = screen.getByPlaceholderText(
    /Search for any IP address or domain/
  );
  const button = screen.getByRole('button', { name: /search ip or domain/i });
  fireEvent.input(input, { target: { value: 'example.com' } });
  fireEvent.click(button);
  await waitFor(() => screen.findByText(/ExampleISP/));

  fireEvent.input(input, { target: { value: '127.0.0.1' } });
  fireEvent.click(button);

  await waitFor(() => screen.findByText(/Good Response/));
});
