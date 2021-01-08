// import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../styles/Card.scss';

const Card = ({ entry }) => {
  const handleClick = () => {
    console.log(entry);
  };

  return (
    <>
      <button type="button" key={entry.id} className="Card" onClick={() => handleClick()}>
        {/* console.log(entry) */}
        <p>{entry.name}</p>
        <img src={entry.images.lg} alt={entry.name} />
      </button>
    </>

  );
};

Card.propTypes = {
  entry: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    images: PropTypes.shape({
      lg: PropTypes.string,
    }),
  }),
};

Card.defaultProps = {
  entry: {},

};

// export default connect(state => ({ books: state.books }))(Card);

export default Card;
