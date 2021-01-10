import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card';

import store from '../redux/store';

describe('rendered Button', () => {
  let renderedComponent;
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

  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <Card key={entry.slug} entry={entry} />
      </Provider>,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('does things', () => {
    const { getByText } = renderedComponent;
    const element = getByText(/Superhero/i);
    expect(element).toBeInTheDocument();
    expect(element.textContent).not.toBe('1-SuperHero');
  });

  it('does things', () => {
    const card = document.querySelector('.manyCards');
    const style = window.getComputedStyle(card);
    expect(style.border).toBe('3px solid blue');
    expect(style.border).not.toBe('3px solid red');
  });

  it('does things', () => {
    const card = document.querySelector('img');
    expect(card.src).toBe('http://localhost/assets/batLogo.png');
    expect(card.alt).toBe('Superhero');
    expect(card.alt).not.toBe('1-SuperHero');
  });
});
