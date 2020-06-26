import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { slugifyTitle } from '../../utils';

const RecipeSmall = ({
  title,
  thumbnail,
  difficulty,
  isFavorite,
}) => {
  const cssClass = classNames('recipe-small', { 'recipe-small--favorite': isFavorite });

  return (
    <article className={cssClass}>
      <img
        alt=""
        src={thumbnail}
      />
      <div className="recipe-small-content">
        <h2>{ title }</h2>
        <p>Difficulté: {difficulty}</p>
        <Link
          to={`/recipe/${slugifyTitle(title)}`}
        >
          Voir la recette
        </Link>
      </div>

    </article>
  );
};

RecipeSmall.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default RecipeSmall;
