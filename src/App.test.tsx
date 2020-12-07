import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const helloText = getByText(/React TS boilerplate/i);
  expect(helloText).toBeInTheDocument();
});
