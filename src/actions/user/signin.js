import { userActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default (payload = {}) => dispatch => dispatch(apiAction({
  method: 'post',
  url: '/auth/login',
  data: { ...payload },
  onStart: userActionsTypes.SIGNIN_USER_START,
  onEnd: userActionsTypes.SIGNIN_USER_END,
  onSuccess: userActionsTypes.SIGNIN_USER_SUCCESS,
  onFailure: userActionsTypes.SIGNIN_USER_FAILURE
}));
