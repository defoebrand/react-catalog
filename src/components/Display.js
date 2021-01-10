import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import {
  displayEntry, displayEntries,
} from '../redux/actions';

import Card from './Card';

import '../styles/Display.scss';

const Display = ({
  filter, entries, dispatch, history,
}) => {
  useEffect(() => {
    dispatch(displayEntries('manyCards'));
  }, []);

  const handleClick = character => {
    dispatch(displayEntry(character));
    history.push(`/stats/${character.name}`);
  };

  const regex = new RegExp(filter, 'i');

  const dataMap = (
    filter === ''
      ? (entries.map(entry => (
        <Card key={entry.slug} entry={entry} clickEvent={handleClick} />)))
      : (entries.filter(entry => (regex.test(entry.name))).map(entry => (
        <Card key={entry.slug} entry={entry} clickEvent={handleClick} />)))
  );

  return (
    <main className="Display">
      {dataMap}
    </main>
  );
};

Display.propTypes = {
  filter: PropTypes.string,
  entries: PropTypes.arrayOf(PropTypes.shape()),
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

Display.defaultProps = {
  filter: '',
  entries: [],
};

export default connect(state => ({
  filter: state.searchReducer.filter,
  entries: state.superHeroReducer.entries,
}))(Display);
