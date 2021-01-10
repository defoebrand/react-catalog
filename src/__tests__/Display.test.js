import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../components/Display';

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

const dataMap = (<h1>Superhero</h1>);

const history = {
  location: {
    pathname: '/all',
  },
};

test('renders Button', () => {
  render(
    <Provider store={store}>
      <Display dataMap={dataMap} history={history} />
    </Provider>,
  );
  // const element = screen.secondChild;
  // const element = screen.getByText(/Superhero/i);
  // expect(element).toBeInTheDocument();
});
