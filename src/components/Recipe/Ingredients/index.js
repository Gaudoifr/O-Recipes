import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient';
import './ingredients.scss';

const Ingredients = ({ ingredients }) => (
  <ul className="ingredients">
    {ingredients.map((ingredient) => (
      <Ingredient
        key={ingredient.id}
        name={ingredient.name}
        quantity={ingredient.quantity}
        unit={ingredient.unit}
      />
    ))}
  </ul>
);

Ingredients.propTypes = {
  // tableau qui contient des objets
  // ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  // on peut faire plus précis, e indiquant les propriétés de l'objet
  ingredients: PropTypes.arrayOf(
    // tableau d'objets qui ont la forme indiquée (propriétés de l'objet)
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      unit: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Ingredients;
