import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from './Card';

import '../styles/Results.scss';

const Results = ({ filter, entries }) => {
  const superEntries = JSON.parse(localStorage.entries);
  console.log(entries);
  const dataMap = (
    filter === ''
      ? (superEntries.map(entry => (
        <Card key={entry.id} entry={entry} />)))
      : (superEntries.filter(entry => {
        const regex = new RegExp(filter, 'i');
        return (regex.test(entry.name));
      }).map(entry => (
        <Card key={entry.id} entry={entry} />)))
  );
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
      id: PropTypes.number,
    }),
  ),
};

Results.defaultProps = {
  filter: '',
  entries: [],
};

export default connect(state => ({
  filter: state.filter,
  entries: state.entries,
}))(Results);
