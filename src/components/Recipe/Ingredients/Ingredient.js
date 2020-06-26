import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = ({ name, quantity, unit }) => (
  <li className="ingredient">
    <span className="quantity">{quantity} {unit}</span> {name}
  </li>
);

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  unit: PropTypes.string.isRequired,
};

export default Ingredient;
