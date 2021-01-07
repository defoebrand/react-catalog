import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from './Card';

import '../styles/Results.scss';

const example = {
  title: "I'm a cat",
  img: 'https://i.ytimg.com/vi/UKeI9bdB6Qg/maxresdefault.jpg',
  desc: "I'm a kitty cat",
  info: 'I meow, meow, meow',
};

const Results = ({ filter }) => (
  <main className="Results">
    <p>{filter}</p>
    <Card data={example} />
  </main>
);

Results.propTypes = {
  filter: PropTypes.string,
};

Results.defaultProps = {
  filter: '',
};

export default connect(state => ({ filter: state.filter }))(Results);
