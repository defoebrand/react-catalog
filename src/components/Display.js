import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { displayEntry } from '../redux/actions';

import Card from './Card';

import '../styles/Display.scss';

const AllCharacters = ({
  filter, entries, dispatch, history,
}) => {
  const handleClick = character => {
    dispatch(displayEntry(character));
    const alignment = '/card';
    history.push(`${alignment}/${character.name}`);
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
    <main className="AllCharacters">
      {dataMap}
    </main>
  );
};

AllCharacters.propTypes = {
  filter: PropTypes.string,
  entries: PropTypes.arrayOf(PropTypes.shape()),
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

AllCharacters.defaultProps = {
  filter: '',
  entries: [],
};

export default connect(state => ({
  filter: state.searchReducer.filter,
  entries: state.superHeroReducer.entries,
}))(AllCharacters);
