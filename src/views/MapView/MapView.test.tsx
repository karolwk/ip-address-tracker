import { render, screen, handlers } from '../../shared/test-utils';
import '@testing-library/jest-dom/extend-expect';

import { setupServer } from 'msw/node';
import MapView from './MapView';

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('should render map with marker', async () => {
  render(<MapView />);

  expect(await screen.findByAltText(/Marker/)).toBeInTheDocument();
});
