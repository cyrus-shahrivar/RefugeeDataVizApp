import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders application header', () => {
  render(<Header />)

  const headerEl = screen.getByText(/THE REFUGEE DATA VISUALIZER PROJECT/i)

  expect(headerEl).toBeInTheDocument()
})
