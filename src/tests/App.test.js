import { render, screen } from '@testing-library/react';
import App from '../components/Layouts/App';

test('renders React 1 title', () => {
  const mockProducts = [
    { id: 1, name: 'Test Product', price: 10, img: 'test.jpg' }
  ];
  render(<App products={mockProducts} name="Test User" age={25} />);
  const titleElement = screen.getByText(/React 1/i);
  expect(titleElement).toBeInTheDocument();
});
