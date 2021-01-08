import PropTypes from 'prop-types';

import '../styles/Card.scss';

const Card = ({ entry, clickEvent, singleEntry }) => {
  const displayOne = (
    <div key={entry.id} className="Card">
      <h1>{entry.name}</h1>
      <img src={entry.images.lg} alt={entry.name} />
      <table style={{ width: '100%' }}>
        <tr>
          <th>Full Name: </th>
          <td><h3>{entry.biography.fullName}</h3></td>
        </tr>
        <tr>
          <th>First Appearance: </th>
          <td>{entry.biography.firstAppearance}</td>
        </tr>
        <tr>
          <th>Gender: </th>
          <td>{entry.appearance.gender}</td>
        </tr>
        <tr>
          <th>Height: </th>
          <td>{entry.appearance.height[0]}</td>
        </tr>
        <tr>
          <th>Eye Color: </th>
          <td>{entry.appearance.eyeColor}</td>
        </tr>
        <tr>
          <th>Hair Color: </th>
          <td>{entry.appearance.hairColor}</td>
        </tr>
        <tr>
          <th>Race: </th>
          <td>{entry.appearance.race}</td>
        </tr>
        <tr>
          <th>Affiliation: </th>
          <td>{entry.connections.groupAffiliation}</td>
        </tr>
        <tr>
          <th>Relatives: </th>
          <td>{entry.connections.relatives}</td>
        </tr>
        <tr>
          <p>POWER STATS</p>
        </tr>
        <tr>
          <th>Combat: </th>
          <td>{entry.powerstats.combat}</td>
        </tr>
        <tr>
          <th>Durability: </th>
          <td>{entry.powerstats.durability}</td>
        </tr>
        <tr>
          <th>Intelligence: </th>
          <td>{entry.powerstats.intelligence}</td>
        </tr>
        <tr>
          <th>Power: </th>
          <td>{entry.powerstats.power}</td>
        </tr>
        <tr>
          <th>Speed: </th>
          <td>{entry.powerstats.speed}</td>
        </tr>
        <tr>
          <th>Strength: </th>
          <td>{entry.powerstats.strength}</td>
        </tr>

      </table>

    </div>
  );
  const displayMany = (
    <button type="button" key={entry.id} className="Card" onClick={() => clickEvent(entry)}>
      <p>{entry.name}</p>
      <img src={entry.images.lg} alt={entry.name} />
    </button>
  );
  return (
    <>
      {singleEntry === 'yes' ? displayOne : displayMany}
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
  singleEntry: PropTypes.string,
};

Card.defaultProps = {
  entry: {},
  singleEntry: '',
};

export default Card;
