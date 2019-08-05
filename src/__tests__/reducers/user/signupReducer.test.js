import useReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { userActionsTypes } from '../../../actions-types';
import { userToRegister } from '../../../__mocks__/user';

describe('Sign-up reducers', () => {
  test('SIGNUP_USER_START', () => {
    const reducer = useReducer(initialState, {
      type: userActionsTypes.SIGNUP_USER_START,
      payload: { loading: true }
    });

    expect(reducer.signup).toHaveProperty('loading');
    expect(reducer.signup.loading).toBeTruthy();
  });

  test('SIGNUP SUCCESS', () => {
    const reducer = useReducer(initialState, {
      type: userActionsTypes.SIGNUP_USER_SUCCESS,
      payload: { newUser: userToRegister }
    });

    expect(reducer.profile).toHaveProperty('firstName');
    expect(reducer.profile).toHaveProperty('lastName');
    expect(reducer.profile).toHaveProperty('userName');
    expect(reducer.profile).toHaveProperty('email');
  });

  test('SIGNUP FAILURE', () => {
    const reducer = useReducer(initialState, {
      type: userActionsTypes.SIGNUP_USER_FAILURE,
      payload: { errors: { user: 'user already exists' } }
    });

    expect(reducer.signup.errors).toHaveProperty('user');
    expect(reducer.signup.errors.user).toEqual('user already exists');
  });

  test('SIGNUP END', () => {
    const reducer = useReducer(initialState, {
      type: userActionsTypes.SIGNUP_USER_END,
      payload: { loading: false }
    });

    expect(reducer.signup).toHaveProperty('loading');
    expect(reducer.signup.loading).toBeFalsy();
  });
});
