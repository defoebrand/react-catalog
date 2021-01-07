import '../styles/Navbar.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Results = ({ filter }) => (
  <header className="Navbar">
    <p>{filter}</p>
  </header>
);

Results.propTypes = {
  filter: PropTypes.string,
};

Results.defaultProps = {
  filter: '',
};

export default connect(state => ({ filter: state.filter }))(Results);
