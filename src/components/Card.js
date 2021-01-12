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
  let alignment;
  let alignmentStyle;
  if (display === 'singleCard') {
    alignment = character.biography.alignment === 'good'
      ? 'Hero'
      : 'Villian';
    alignmentStyle = character.biography.alignment === 'good'
      ? { border: '3px solid blue' }
      : { border: '3px solid red' };
    displayCard = (
      <div key={character.slug} className="singleCard">
        <h1>
          {`${character.name} - ${alignment}`}
        </h1>
        <div>
          <img src={character.images.md} alt={character.name} style={alignmentStyle} />

          <table>
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
                <td>{`${character.appearance.height[0]}"`}</td>
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
                <td colSpan="2" className="powerCaption">POWER STATS</td>
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
      </div>
    );
  } else {
    alignmentStyle = entry.biography.alignment === 'good'
      ? { border: '3px solid blue' }
      : { border: '3px solid red' };
    displayCard = (
      <button type="button" key={entry.slug} className="manyCards" onClick={() => clickEvent(entry)} style={alignmentStyle}>
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
      md: PropTypes.string,
    }),
    biography: PropTypes.shape({
      fullName: PropTypes.string,
      firstAppearance: PropTypes.string,
      alignment: PropTypes.string,
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
    biography: PropTypes.shape({
      alignment: PropTypes.string,
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
