import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../components/Display';

import store from '../redux/store';

describe('rendered Display', () => {
  let renderedComponent;

  const entry = [{
    slug: '1-SuperHero',
    name: 'Superhero',
    biography: {
      alignment: 'good',
    },
    images: {
      sm: '../assets/batLogo.png',
    },
  }];

  const history = {
    location: {
      pathname: '/all',
    },
  };

  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <Display filter="" entries={entry} history={history} />
      </Provider>,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('has a main role with no name', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('main', { name: '' });
    expect(main).toBeInTheDocument();
  });

  it('has a main element with class Display', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('main');
    expect(appElement.classList).toContain('Display');
  });
});
