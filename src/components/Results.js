import '../styles/Navbar.scss';
// import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// class Results extends Component {
//   componentDidMount() {
//     console.log(this.props);
//   }
const Results = ({ results }) => {
  console.log(results);
  return (
    <header className="Navbar">
      <p>{results}</p>
    </header>
  );
};

Results.propTypes = {
  results: PropTypes.string,
};

Results.defaultProps = {
  results: '',
};

export default connect(state => {
  console.log({ results: state.searchReducer });
  return { results: state.searchReducer };
  // results: state.searchReducer,
})(Results);
