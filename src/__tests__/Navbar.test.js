import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';

import store from '../redux/store';

// const entry = [{
//   slug: '1-SuperHero',
//   name: 'Superhero',
//   biography: {
//     alignment: 'good',
//   },
//   images: {
//     sm: '../assets/batLogo.png',
//   },
// }];

const history = {
  location: {
    pathname: '/all',
  },
};

// const dataMap = (<h1>Superhero</h1>);
describe('rendered App', () => {
  const { container } = render(
    <Provider store={store}>
      <Navbar history={history} />
    </Provider>,
  );

  test('renders Button', () => {
    const element = container.querySelector('header');
    // const element = screen.secondChild;
    // const element = screen.getByText(/Superhero/i);
    expect(element).toBeInTheDocument();
  });
  test('renders Buttonss', () => {
    // const elementsss = container.getByText(/BatComputer/i);
    // const element = screen.secondChild;
    // const element = screen.getByText(/Superhero/i);
    // expect(elementsss).toBeInTheDocument();
  });
});
describe('rendered App', () => {
  test('renders Button', () => {
    render(
      <Provider store={store}>
        <Navbar history={history} />
      </Provider>,
    );

    const element = screen.getByText(/BatComputer/i);
    expect(element).toBeInTheDocument();
  });
});
