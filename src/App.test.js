import { render, screen } from '@testing-library/react';
import App from './App';

test('renders StoicQuotes title', () => {
  render(<App />);
  const titleElement = screen.getByText(/StoicQuotes/i);
  expect(titleElement).toBeInTheDocument();
});
