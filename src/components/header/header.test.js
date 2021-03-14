import { render, screen } from '@testing-library/react';
import Header from './header';

test('renders header with text', () => {
  render(<Header />);
  const textElement = screen.getByText(/GameScore/i);
  expect(text).toBeInTheDocument();
});