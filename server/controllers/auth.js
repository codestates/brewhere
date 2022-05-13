const { checkAccessToken, checkRefreshToken} = require('../controllers/tokenFunctions');

module.exports = (req, res) => {
  const accessToken = checkAccessToken(req);
  const refreshToken = checkRefreshToken(req.cookies.refreshToken);

  if(!accessToken && !refreshToken) {
    return null;
  } else if(accessToken) {
    delete accessToken.password;
    return accessToken;
  } else {
    delete accessToken.password;
    return refreshToken;
  }
}