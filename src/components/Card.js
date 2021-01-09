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

  let displayCard;

  if (display === 'singleCard') {
    displayCard = (
      <div key={character.slug} className="singleCard">
        <h1>{character.name}</h1>
        <img src={character.images.lg} alt={character.name} />
        <table style={{ width: '100%' }}>
          <tbody>
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
              <th>Weight: </th>
              <td>{character.appearance.weight[0]}</td>
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

              <td>POWER STATS</td>
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
          </tbody>
        </table>
      </div>
    );
  } else {
    displayCard = (
      <button type="button" key={entry.slug} className="manyCards" onClick={() => clickEvent(entry)}>
        <p>{entry.name}</p>
        <img src={entry.images.sm} alt={entry.name} />
      </button>
    );
  }

  return (
    <>
      { displayCard }
    </>

  );
};

Card.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    images: PropTypes.shape({
      lg: PropTypes.string,
    }),
    biography: PropTypes.shape({
      fullName: PropTypes.string,
      firstAppearance: PropTypes.string,
    }),
    appearance: PropTypes.shape({
      gender: PropTypes.string,
      height: PropTypes.arrayOf(PropTypes.string),
      weight: PropTypes.arrayOf(PropTypes.string),
      eyeColor: PropTypes.string,
      hairColor: PropTypes.string,
      race: PropTypes.string,
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
  entry: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    images: PropTypes.shape({
      sm: PropTypes.string,
    }),
  }),
  display: PropTypes.string,
  clickEvent: PropTypes.func,
};

Card.defaultProps = {
  character: {},
  entry: {},
  display: '',
  clickEvent: undefined,
};

export default connect(state => ({
  display: state.selectionReducer.display,
  character: state.selectionReducer.entry,
}))(Card);
