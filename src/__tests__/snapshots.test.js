import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';

import App from '../containers/App';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Display from '../components/Display';

describe('spanshots', () => {
  it('renders App correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  const history = {
    location: {
      pathname: '/all',
    },
  };

  it('renders Navbar correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Navbar history={history} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

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

  it('renders Card correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Card key={entry.slug} entry={entry} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Card correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Display filter="" entries={entry} history={history} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
