import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { runSearch, displayEntries } from '../redux/actions';

import '../styles/Navbar.scss';

const Navbar = ({ dispatch, history, display }) => {
  let input;

  const handleChange = event => {
    if (display === 'singleCard') {
      dispatch(displayEntries('manyCards'));
    }
    if (history.location.pathname !== '/all') {
      history.push('/all');
    }
    input = event.target.value;
    dispatch(runSearch(input));
  };

  const handleClick = () => {
    if (display === 'singleCard') {
      dispatch(displayEntries('manyCards'));
    }
    dispatch(runSearch(''));
    history.push('/all');
  };

  return (
    <header className="Navbar">
      <button type="button" className="batLogo" onClick={handleClick}><img src="./batLogo.png" alt="BatComputer" /></button>
      <div>
        <h1>BatComputer</h1>
        <input value={input} onChange={handleChange} />
      </div>
      <button type="button" className="batLogo" onClick={handleClick}><img src="./batLogo.png" alt="BatComputer" /></button>

    </header>
  );
};

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  display: PropTypes.string,
};

Navbar.defaultProps = {
  display: '',
};

export default connect(state => ({
  display: state.selectionReducer.display,
}))(Navbar);
