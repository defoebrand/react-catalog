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

  it('has a banner role with no name', () => {
    const { getByRole } = renderedComponent;
    const banner = getByRole('banner', { name: '' });
    expect(banner).toBeInTheDocument();
  });

  it('has a button role named BatComputer with two buttons', () => {
    const { getAllByRole } = renderedComponent;
    const batButtons = getAllByRole('button', { name: 'BatComputer' });
    expect(batButtons[0]).toBeInTheDocument();
    expect(batButtons[1]).toBeInTheDocument();
  });

  it('has an image role named BatComputer with two images', () => {
    const { getAllByRole } = renderedComponent;
    const batImages = getAllByRole('img', { name: 'BatComputer' });
    expect(batImages[0]).toBeInTheDocument();
    expect(batImages[1]).toBeInTheDocument();
  });

  it('has a heading role named BatComputer', () => {
    const { getByRole } = renderedComponent;
    const heading = getByRole('heading', { name: 'BatComputer' });
    expect(heading).toBeInTheDocument();
  });

  it('has a textbox role with no name', () => {
    const { getByRole } = renderedComponent;
    const textbox = getByRole('textbox', { name: '' });
    expect(textbox).toBeInTheDocument();
  });

  it('has a main role with no name', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('main', { name: '' });
    expect(main).toBeInTheDocument();
  });
});
