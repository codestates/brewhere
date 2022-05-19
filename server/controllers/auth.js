const { checkAccessToken, checkRefreshToken} = require('../controllers/tokenFunctions');

module.exports = (req, res) => {
  const accessToken = checkAccessToken(req.cookies.accessToken);
  if(!accessToken ) {
    return res.status(401).send({ data: null, message: 'not authorized' });;
  } 
  return res.status(200).send({ "data": { userInfo: accessToken }});
  
}