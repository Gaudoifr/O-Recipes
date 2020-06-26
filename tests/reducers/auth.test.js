import { expect } from 'chai';

import authReducer from '../../src/reducers/auth';
import { logUser } from '../../src/actions/auth';

describe.only('reducer for authentification', () => {
  it('is a function', () => {
    expect(authReducer).to.be.a('function');
  });

  it('test initial state', () => {

    const expectedState = {
      inputEmail: '',
      inputPassword: '',
      isLogged: false,
    };

    expect(authReducer()).to.deep.equal(expectedState);
  });

  it('check treatment of action LOG_USER', () => {
    const stateBefore = {
      inputEmail: '',
      inputPassword: '',
      isLogged: false,
    };

    const action = logUser();

    // on calcule le résultat attendu en sortie du reducer
    const expectedState = {
      ...stateBefore,
      isLogged: true,
    };

    // on appelle le reducer avec state et action => on vérifie le state en retour
    const stateAfter = authReducer(stateBefore, action);
    expect(stateAfter).to.deep.equal(expectedState);

    // console.log(stateAfter);
  });
});
