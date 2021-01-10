import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';

import store from '../redux/store';

describe('rendered Button', () => {
  let renderedComponent;

  beforeEach(() => {
    const history = {
      location: {
        pathname: '/all',
      },
    };

    renderedComponent = render(
      <Provider store={store}>
        <Navbar history={history} />
      </Provider>,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('does things', () => {
    const { container } = renderedComponent;
    const element = container.querySelector('header');
    expect(element).toBeInTheDocument();
  });

  it('does things', () => {
    const { getByText } = renderedComponent;
    const element = getByText(/BatComputer/i);
    expect(element).toBeInTheDocument();
  });

  it('does things', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('header');
    expect(appElement.classList).toContain('Navbar');
  });

  it('does things', () => {
    const { container } = renderedComponent;
    const btnElement = container.querySelector('button');
    expect(btnElement.type).toBe('button');
    expect(btnElement.classList).toContain('batLogo');
  });

  it('does things', () => {
    const { container } = renderedComponent;
    const btnElement = container.querySelector('button');
    expect(btnElement.firstChild.alt).toBe('BatComputer');
  });

  it('does things', () => {
    const { container } = renderedComponent;
    const imgElement = container.querySelector('img');
    expect(imgElement.src).toBe('http://localhost/batLogo.png');
    expect(imgElement.src).not.toBe('http://localhost/assets/batLogo.png');
    expect(imgElement.alt).toBe('BatComputer');
    expect(imgElement.alt).not.toBe('batLogo');
  });

  it('does things', () => {
    const { container } = renderedComponent;
    const h1Element = container.querySelector('h1');
    expect(h1Element.textContent).toBe('BatComputer');
    expect(h1Element.textContent).not.toBe('');
  });

  it('does things', () => {
    const { container } = renderedComponent;
    const inputElement = container.querySelector('input');
    expect(inputElement.value).toBe('');
  });
});
