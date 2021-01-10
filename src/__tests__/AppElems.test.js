import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';

import App from '../containers/App';

describe('rendered App', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(

      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('has a div with class App', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('div');
    expect(appElement.classList).toContain('App');
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

  it('has a main element with class Display', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('main');
    expect(appElement.classList).toContain('Display');
  });
});
