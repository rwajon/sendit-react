import { user as initialState } from '../../store/initialState';
import clearUserStoreReducer from './clearUserStoreReducer';
import getUserReducer from './getUserReducer';
import signupReducer from './signupReducer';
import signinReducer from './signinReducer';

export default (state = initialState, action) => {
  const clearUserStore = clearUserStoreReducer(state, action);
  const getUser = getUserReducer(state, action);
  const signup = signupReducer(state, action);
  const signin = signinReducer(state, action);
  return clearUserStore || getUser || signup || signin || state;
};
