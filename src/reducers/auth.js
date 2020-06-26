import {
  CHANGE_FIELD_SETTINGS,
  LOG_USER,
} from '../actions/auth';

const initialState = {
  inputEmail: '',

  inputPassword: '',

  isLogged: false,

  userData: null,
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_SETTINGS: {
      return {
        ...state,
        [action.identifier]: action.newValue,
      };
    }

    case LOG_USER:

      return {
        ...state,
        isLogged: action.isLogged,
        userData: action.userData,
      };

    default: return state;
  }
};

export default authReducer;
