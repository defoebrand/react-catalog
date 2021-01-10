import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../components/Card';

import store from '../redux/store';

describe('rendered Card', () => {
  let renderedComponent;
  const entry = {
    slug: '1-SuperHero',
    name: 'Superhero',
    biography: {
      alignment: 'bad',
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

  it('has a text element that displays the entry name', () => {
    const { getByText } = renderedComponent;
    const element = getByText(/Superhero/i);
    expect(element).toBeInTheDocument();
    expect(element.textContent).not.toBe('1-SuperHero');
  });

  it('displays a red border if alignment is "bad"', () => {
    const card = document.querySelector('.manyCards');
    const style = window.getComputedStyle(card);
    expect(style.border).toBe('3px solid red');
    expect(style.border).not.toBe('3px solid blue');
  });

  it('has an image element that displays the associated url', () => {
    const card = document.querySelector('img');
    expect(card.src).toBe('http://localhost/assets/batLogo.png');
    expect(card.alt).toBe('Superhero');
    expect(card.alt).not.toBe('1-SuperHero');
  });
});
