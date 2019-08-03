const checkUser = require('../../helpers/checkUser')();

module.exports = {
  profile: checkUser.profile,
  token: localStorage.token,
  isAuth: checkUser.isAuth,
  currentUser: {},
  signup: {
    loading: false,
    message: '',
    errors: {}
  },
  signin: {
    loading: false,
    message: '',
    errors: {}
  },
  getUser: {
    loading: false,
    message: '',
    errors: {}
  }
};
