module.exports = {
  signup: require('./users/signup'),
  login: require('./users/login'),
  logout: require('./users/logout'),
  mypage: require('./users/mypage'),
  emailCheck: require('./users/emailCheck'),
  nickname: require('./users/username'),
  password: require('./users/password'),
  withdrawal: require('./users/withdrawal'),
  breweryid: ('./brewery/:breweryid'),
};