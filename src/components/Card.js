import PropTypes from 'prop-types';

import '../styles/Card.scss';

const Card = ({ data }) => (
  <div className="Card">
    <h1>{data.title}</h1>
    <img src={data.img} alt={`Example of "${data.title}"`} />
    <h4>{data.desc}</h4>
    <p>{data.info}</p>
  </div>
);

Card.propTypes = {
  data: PropTypes.objectOf({
    title: PropTypes.string,
    img: PropTypes.string,
    desc: PropTypes.string,
    info: PropTypes.string,
  }),
};

Card.defaultProps = {
  data: {},
};

export default Card;
