import { userActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.SIGNIN_USER_START:
      return {
        ...state,
        signin: { ...state.signin, message: '', loading: true, errors: {} }
      };
    case userActionsTypes.SIGNIN_USER_END:
      return {
        ...state,
        signin: { ...state.signin, loading: false }
      };
    case userActionsTypes.SIGNIN_USER_SUCCESS:
      localStorage.user = JSON.stringify(payload.user);
      localStorage.token = payload.token;
      return {
        ...state,
        isAuth: true,
        profile: payload.user,
        token: payload.token,
        signin: { loading: false, message: payload.message, errors: {} }
      };
    case userActionsTypes.SIGNIN_USER_FAILURE:
      return {
        ...state,
        signin: {
          loading: false,
          message: '',
          errors: { message: payload.error, ...payload.errors }
        }
      };
    default:
      return null;
  }
};
