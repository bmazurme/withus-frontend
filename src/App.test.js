import { render, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-unresolved, import/extensions
import App from './App';

// eslint-disable-next-line no-undef
test('renders learn react link', () => {
  // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-filename-extension
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  // eslint-disable-next-line no-undef
  expect(linkElement).toBeInTheDocument();
});
