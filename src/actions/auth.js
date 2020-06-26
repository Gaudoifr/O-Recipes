export const CHANGE_FIELD_SETTINGS = 'CHANGE_FIELD_SETTINGS';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOG_USER = 'LOG_USER';
export const LOG_OUT = 'LOG_OUT';
export const CHECK_LOGGED = 'CHECK_LOGGED';


export const changeFieldSettings = (newValue, identifier) => ({
  type: CHANGE_FIELD_SETTINGS,
  newValue,
  identifier,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const logUser = (isLogged, userData) => ({
  type: LOG_USER,
  isLogged,
  userData,
});

export const checkLogged = () => ({
  type: CHECK_LOGGED,
});

export const logOut = () => ({
  type: LOG_OUT,
});
