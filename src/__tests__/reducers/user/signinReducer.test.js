import useReducer from '../../../reducers/user';
import initialState from '../../../store/initialStates/userInitialState';
import { userActionsTypes } from '../../../actions-types';
import user from '../../../__mocks__/user';

describe('Sign-in reducers', () => {
  test('SIGNIN_USER_START', () => {
    const reducer = useReducer(initialState, {
      type: userActionsTypes.SIGNIN_USER_START,
      payload: { loading: true }
    });

    expect(reducer.signin).toHaveProperty('loading');
    expect(reducer.signin.loading).toBeTruthy();
  });

  test('SIGNIN SUCCESS', () => {
    const reducer = useReducer(initialState, {
      type: userActionsTypes.SIGNIN_USER_SUCCESS,
      payload: { user }
    });

    expect(reducer.profile).toHaveProperty('firstName');
    expect(reducer.profile).toHaveProperty('lastName');
    expect(reducer.profile).toHaveProperty('userName');
    expect(reducer.profile).toHaveProperty('email');
  });

  test('SIGNIN FAILURE', () => {
    const reducer = useReducer(initialState, {
      type: userActionsTypes.SIGNIN_USER_FAILURE,
      payload: { errors: { user: 'user do not exist' } }
    });

    expect(reducer.signin.errors).toHaveProperty('user');
    expect(reducer.signin.errors.user).toEqual('user do not exist');
  });

  test('SIGNIN END', () => {
    const reducer = useReducer(initialState, {
      type: userActionsTypes.SIGNIN_USER_END,
      payload: { loading: false }
    });

    expect(reducer.signup).toHaveProperty('loading');
    expect(reducer.signup.loading).toBeFalsy();
  });
});
