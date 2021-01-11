import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';

import store from '../redux/store';

describe('rendered Button', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('has a header with class Navbar', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('header');
    expect(appElement.classList).toContain('Navbar');
  });

  it('has a button of type button and class batLogo', () => {
    const { container } = renderedComponent;
    const btnElement = container.querySelector('button');
    expect(btnElement.type).toBe('button');
    expect(btnElement.classList).toContain('batLogo');
  });

  it('has a button with a nested image and alt BatComputer', () => {
    const { container } = renderedComponent;
    const btnElement = container.querySelector('button');
    expect(btnElement.firstChild.alt).toBe('BatComputer');
  });

  it('has an image with src batLogo.png and alt BatComputer', () => {
    const { container } = renderedComponent;
    const imgElement = container.querySelector('img');
    expect(imgElement.src).toBe('http://localhost/batLogo.png');
    expect(imgElement.src).not.toBe('http://localhost/assets/batLogo.png');
    expect(imgElement.alt).toBe('BatComputer');
    expect(imgElement.alt).not.toBe('batLogo');
  });

  it('has an h1 with text BatComputer', () => {
    const { container } = renderedComponent;
    const h1Element = container.querySelector('h1');
    expect(h1Element.textContent).toBe('BatComputer');
    expect(h1Element.textContent).not.toBe('');
  });

  it('has an input with a blank value', () => {
    const { container } = renderedComponent;
    const inputElement = container.querySelector('input');
    expect(inputElement.value).toBe('');
  });
});
