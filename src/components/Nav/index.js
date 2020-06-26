import React from 'react';
import PropTypes from 'prop-types';
/* Link permet d'avoir un lien tout simple, NavLink est une version plus évoluée
de Link qui permet d'avoir une mise en forme spéciale (classe CSS) sur le lien qui
correspond à l'URL dans la barre d'adresse
*/
import { NavLink } from 'react-router-dom';
import { slugifyTitle } from 'src/utils';

import './nav.scss';

const Nav = ({ recipes }) => (
  <nav className="nav">
    <NavLink
      className="nav-item"
      activeClassName="nav-item-active"
      to="/"
      exact
    >
      Accueil
    </NavLink>
    {recipes.map((recipe) => {
      const slug = slugifyTitle(recipe.title);

      return (
        <NavLink
          className="nav-item"
          activeClassName="nav-item-active"
          to={`/recipe/${slug}`}
          key={recipe.id}
        >
          {recipe.title}
        </NavLink>
      );
    })}
  </nav>
);

Nav.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Nav;
