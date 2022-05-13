import { render, screen, handlers } from '../../shared/test-utils';
import '@testing-library/jest-dom/extend-expect';

import { setupServer } from 'msw/node';
import DetailView from './DetailView';

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('should render properly', () => {
  render(<DetailView />);

  expect(screen.getByText(/IP/)).toBeInTheDocument();
  expect(screen.getByText(/IP ADDRESS/)).toBeInTheDocument();
  expect(screen.getByText(/TIMEZONE/)).toBeInTheDocument();
  expect(screen.getByText(/ISP/)).toBeInTheDocument();
});
