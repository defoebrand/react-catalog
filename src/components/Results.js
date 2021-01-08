import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { displayEntry } from '../redux/actions';

import Card from './Card';

import '../styles/Results.scss';

const Results = ({
  filter, entries, dispatch, history,
}) => {
  console.log(entries[0]);
  const superHeroes = Array.isArray(entries) ? entries : [];
  // console.log('result entries', entries);
  // console.log('result filter', filter);
  const handleClick = character => {
    dispatch(displayEntry(character));
    history.push('/card');
  };
  const dataMap = (
    filter === ''
      ? (superHeroes.map(entry => (
        <Card key={entry.id} entry={entry} clickEvent={handleClick} />)))
      : (superHeroes.filter(entry => {
        const regex = new RegExp(filter, 'i');
        return (regex.test(entry.name));
      }).map(entry => (
        <Card key={entry.slug} entry={entry} clickEvent={handleClick} />)))
  );

  // const singleCard = (
  //   <Card key={singleEntry.id} entry={singleEntry} clickEvent={handleClick} singleEntry="yes" />
  // );

  return (
    <main className="Results">
      <p>{filter}</p>
      {dataMap}
    </main>
  );
};

Results.propTypes = {
  filter: PropTypes.string,
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
    }),
  ),
  singleEntry: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }),
  dispatch: PropTypes.func.isRequired,
  // display: PropTypes.string,
  history: PropTypes.shape().isRequired,
};

Results.defaultProps = {
  filter: '',
  entries: [],
  singleEntry: {},
  // display: '',
};

export default connect(state => ({
  filter: state.searchReducer.filter,
  entries: state.superHeroReducer.entries,
  display: state.superHeroReducer.display,
  singleEntry: state.superHeroReducer.entry,
}))(Results);
