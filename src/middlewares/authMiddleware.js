import {
  SUBMIT_LOGIN,
  logUser,
  CHECK_LOGGED,
  LOG_OUT,
} from 'src/actions/auth';

import axios from 'axios';

// middleware responsable de l'authentification
const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans authMiddleware: ', action);

  switch (action.type) {
    case SUBMIT_LOGIN: {
      // on a accès au store, donc au state
      const { inputEmail, inputPassword } = store.getState().auth;

      axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        data: {
          email: inputEmail,
          password: inputPassword,
        },
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(logUser(response.data.logged, response.data.info));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
        });
      next(action);
      break;
    }

    /* authentification persistante :
    - la première fois qu'on accède au serveur, il nous fournit un cookie avec un
    identifiant de session ("tu es l'utilisateur 1234")
    - quand on se connecte (/login) avec des identifiants valides, on envoie le
    cookie avec l'identifiant de session 1234, le serveur note
    que pour l'utilisateur 1234 il y a maintenant une authentification valide
    - quand on demande au serveur si on est loggué (/isLogged), on envoie notre
    numéro, le serveur vérifie s'il a une session à ce numéro et si ça correspond
    à une authentification valide
    - si je demande à me déconnecter (/logout), le serveur détruit la session 1234
    */

    case CHECK_LOGGED:
      axios({
        method: 'post',
        url: 'http://localhost:3001/isLogged',
        // withCredentials : autorisation d'accéder au cookie
        withCredentials: true,
      })
        .then((response) => {
          store.dispatch(logUser(response.data.logged, response.data.info));
        });

      next(action);
      break;

    case LOG_OUT:
      axios({
        method: 'post',
        url: 'http://localhost:3001/logout',
        // withCredentials : autorisation d'accéder au cookie
        withCredentials: true,
      })
        .then((response) => {
          console.log(response);
          // on renvoit les nouvelles informations pour être sûr qu'il est déloggué pour le serveur
          // et pour vider toute information :
          store.dispatch(logUser(response.data.logged, response.data.info));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;

    default:
      next(action);
  }
};
export default authMiddleware;
