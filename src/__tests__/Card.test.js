import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card';

import store from '../redux/store';

const entry = {
  slug: '1-SuperHero',
  name: 'Superhero',
  biography: {
    alignment: 'good',
  },
  images: {
    sm: '../assets/batLogo.png',
  },
};

// const handleClick = () => {
//   alert('hello');
// };

test('renders Button', () => {
  render(
    <Provider store={store}>
      <Card key={entry.slug} entry={entry} />
    </Provider>,
  );

  const element = screen.getByText(/Superhero/i);
  expect(element).toBeInTheDocument();
});
