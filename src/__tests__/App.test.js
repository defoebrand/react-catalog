import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';

import App from '../containers/App';

describe('rendered App', () => {
  const { container } = render(

    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  );

  test("it hasn't test", () => {
    const secondButton = screen.getAllByRole('button', { name: /BatComputer/i });
    // expect(secondButton[0].classList).toContain('batLogo');
    expect(secondButton[0]).toBeInTheDocument();
  });
  const fuckThisTest = container.querySelector('div');
  test('another fucking tset', () => {
    expect(fuckThisTest.classList).toContain('App');
  });
});

//
//   test('has Text element', () => {
//     const element = screen.getByText(/Let's do some math!/i);
//     expect(element).toBeInTheDocument();
//   });
// });
