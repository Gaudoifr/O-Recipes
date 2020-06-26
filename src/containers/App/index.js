import { connect } from 'react-redux';

import App from 'src/components/App';

import { fetchRecipes } from 'src/actions/recipes';
import { checkLogged } from '../../actions/auth';

const mapStateToProps = (state) => ({
  // on a combiné plusieurs reducers : on doit ouvrir le tiroir "recipes"
  // pour pouvoir accéder à loading
  loading: state.recipes.loading,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  fetchRecipes: () => {
    dispatch(fetchRecipes());
  },
  checkLogged: () => {
    dispatch(checkLogged());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
