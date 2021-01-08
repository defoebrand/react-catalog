import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { runSearch, createEntries } from '../redux/actions';

import '../styles/Navbar.scss';

const Navbar = ({ dispatch }) => {
  useEffect(() => {
    fetch('https://akabab.github.io/superhero-api/api/all.json').then(response => response.json()).then(data => {
      // console.log(data);
      dispatch(createEntries(data));
    }).catch(err => err);
  }, []);

  let input;

  const handleChange = event => {
    input = event.target.value;
    dispatch(runSearch(input));
  };

  return (
    <header className="Navbar">
      <h1>Hello!</h1>
      <input value={input} onChange={handleChange} />
      {/* }<input type="submit" value="Submit" onClick={handleClick} /> */}
    </header>
  );
};

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Navbar);
