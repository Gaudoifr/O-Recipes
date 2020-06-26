// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
/*
Sur une Route on peut définir qu'il y a une partie variable => /recipe/:slug
Pour accéder à la valeur de la partie variable, hook useParams dans le composant
qui est généré par la Route
*/
import { useParams } from 'react-router-dom';

import { getRecipeBySlug } from 'src/utils';

// == Import : local
// Composants
import Title from './Title';
import Ingredients from './Ingredients';
import Steps from './Steps';

// Style
import './recipe.scss';

// == Composant
function Recipe({ recipes }) {
  const { slug } = useParams();

  // Recipe a maintenant la responsabilité de récupérer la recette puis de l'afficher
  const recipe = getRecipeBySlug(recipes, slug);

  return (
    <div className="recipe">
      <Title
        title={recipe.title}
        author={recipe.author}
        thumbnail={recipe.thumbnail}
        difficulty={recipe.difficulty}
      />
      <Ingredients ingredients={recipe.ingredients} />
      <Steps steps={recipe.instructions} />
    </div>
  );
}

Recipe.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      ingredients: PropTypes.array.isRequired,
      instructions: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Recipe;
