import { connect } from 'react-redux';

import RecipeSmall from 'src/components/Home/RecipeSmall';

/* deuxième paramètre, facultatif => permet au container d'accéder aux props
qui lui sont fournies par son parent, donc ici, ce qui est fourni par Home */
const mapStateToProps = (state, ownProps) => {
  // objectif : isFalse si id de la recette fait partie des favoris
  // console.log(state.user.userData.favorites);

  // console.log(ownProps);

  return {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    isFavorite: state.auth.isLogged && state.auth.userData.favorites.includes(ownProps.id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeSmall);

