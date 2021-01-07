import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../styles/Results.scss';

const Results = ({ filter }) => (
  <header className="Results">
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
