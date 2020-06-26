// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Nav from 'src/containers/Nav';
import Page from 'src/containers/Page';
import LoginForm from 'src/containers/LoginForm';
import Loader from 'src/components/Loader';

// == Composant
const App = ({ fetchRecipes, loading, checkLogged }) => {
  useEffect(() => {
    checkLogged();
    fetchRecipes();
  }, []); // effet exécuté seulement après le premier rendu de l'application

  return (
    <div className="app">
      {loading && <Loader />}
      {!loading && (
      <>
        <Nav />
        <LoginForm />
        <Page />
      </>
      )}
    </div>
  );
};

App.propTypes = {
  // pas de paramètre
  fetchRecipes: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  // pas de paramètre
  checkLogged: PropTypes.func.isRequired,
};

// == Export
export default App;
