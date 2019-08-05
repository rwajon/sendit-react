import { user as initialState } from '../../store/initialState';
import signupReducer from './signupReducer';
import signinReducer from './signinReducer';

export default (state = initialState, action) => {
  const signup = signupReducer(state, action);
  const signin = signinReducer(state, action);
  return signup || signin || state;
};
