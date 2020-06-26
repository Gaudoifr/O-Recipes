import { connect } from 'react-redux';

import LoginForm from 'src/components/LoginForm';

import { submitLogin, changeFieldSettings, logOut } from 'src/actions/auth';


const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  email: state.auth.inputEmail,
  password: state.auth.inputPassword,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  handleLogin: () => {
    dispatch(submitLogin());
  },

  changeField: (newValue, identifier) => {
    dispatch(changeFieldSettings(newValue, identifier));
  },

  handleLogout: () => {
    dispatch(logOut());
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
