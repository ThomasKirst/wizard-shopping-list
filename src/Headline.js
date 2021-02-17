import PropTypes from 'prop-types';

import './Headline.css';

export default function Headline({ name }) {
  return <h1 className="headline">{name}´s Shopping List</h1>;
}

Headline.propTypes = {
  name: PropTypes.string.isRequired,
};
