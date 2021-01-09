import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import '../styles/Card.scss';

const Card = ({
  entry, clickEvent, character, display,
}) => {
  if (JSON.stringify(entry) === JSON.stringify({})
   && JSON.stringify(character) === JSON.stringify({})) {
    return <Redirect to="/" />;
  }
  // console.log('card entry', entry);
  // console.log('character', character);
  // console.log('display', display);
  // console.log('history', history);
  // console.log('filter', filter);
  // const character = entry === {} ? entry[0] : entry;
  let displayOne;
  let displayMany;
  if (display === 'singleCard') {
    displayOne = (
      <div key={character.id} className="Card">
        <h1>{character.name}</h1>
        <img src={character.images.lg} alt={character.name} />
        <table style={{ width: '100%' }}>
          <tr>
            <th>Full Name: </th>
            <td><h3>{character.biography.fullName}</h3></td>
          </tr>
          <tr>
            <th>First Appearance: </th>
            <td>{character.biography.firstAppearance}</td>
          </tr>
          <tr>
            <th>Gender: </th>
            <td>{character.appearance.gender}</td>
          </tr>
          <tr>
            <th>Height: </th>
            <td>{character.appearance.height[0]}</td>
          </tr>
          <tr>
            <th>Eye Color: </th>
            <td>{character.appearance.eyeColor}</td>
          </tr>
          <tr>
            <th>Hair Color: </th>
            <td>{character.appearance.hairColor}</td>
          </tr>
          <tr>
            <th>Race: </th>
            <td>{character.appearance.race}</td>
          </tr>
          <tr>
            <th>Affiliation: </th>
            <td>{character.connections.groupAffiliation}</td>
          </tr>
          <tr>
            <th>Relatives: </th>
            <td>{character.connections.relatives}</td>
          </tr>
          <tr>
            <p>POWER STATS</p>
          </tr>
          <tr>
            <th>Combat: </th>
            <td>{character.powerstats.combat}</td>
          </tr>
          <tr>
            <th>Durability: </th>
            <td>{character.powerstats.durability}</td>
          </tr>
          <tr>
            <th>Intelligence: </th>
            <td>{character.powerstats.intelligence}</td>
          </tr>
          <tr>
            <th>Power: </th>
            <td>{character.powerstats.power}</td>
          </tr>
          <tr>
            <th>Speed: </th>
            <td>{character.powerstats.speed}</td>
          </tr>
          <tr>
            <th>Strength: </th>
            <td>{character.powerstats.strength}</td>
          </tr>

        </table>

      </div>
    );
  } else {
    displayMany = (
      <button type="button" key={entry.slug} className="Card" onClick={() => clickEvent(entry)}>
        <p>{entry.name}</p>
        <img src={entry.images.lg} alt={entry.name} />
      </button>
    );
  }
  return (
    <>
      {/* filter */}
      { display === 'singleCard' ? displayOne : displayMany }
    </>

  );
};

Card.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string,
    images: PropTypes.shape({
      lg: PropTypes.string,
    }),
    appearance: PropTypes.shape({
      eyeColor: PropTypes.string,
      gender: PropTypes.string,
      height: PropTypes.arrayOf(PropTypes.string),
      hairColor: PropTypes.string,
      race: PropTypes.string,
    }),
    biography: PropTypes.shape({
      fullName: PropTypes.string,
      firstAppearance: PropTypes.string,
    }),
    connections: PropTypes.shape({
      groupAffiliation: PropTypes.string,
      relatives: PropTypes.string,
    }),
    powerstats: PropTypes.shape({
      combat: PropTypes.number,
      durability: PropTypes.number,
      intelligence: PropTypes.number,
      power: PropTypes.number,
      speed: PropTypes.number,
      strength: PropTypes.number,
    }),
  }),
  clickEvent: PropTypes.func.isRequired,
  display: PropTypes.string,
  entry: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    images: PropTypes.shape({
      lg: PropTypes.string,
    }),
  }),
  // history: PropTypes.shape().isRequired,
};

Card.defaultProps = {
  character: {},
  entry: {},
  display: '',
};

export default connect(state => ({
  display: state.selectionReducer.display,
  character: state.selectionReducer.entry,
  filter: state.searchReducer.filter,
}))(Card);

// export default Card;
