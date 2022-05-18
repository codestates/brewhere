// 로그인은 정상적으로 되는데 에러가 뜸.
// Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
const { user } = require('../../models');

const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require('../../controllers/tokenFunctions');

module.exports = async (req, res) => {
  const { user_email, password } = req.body;

  const userInfo = await user.findOne({
    where: {user_email: user_email, password: password}
  });

  if(!userInfo) {
    return res.status(401).json({ message: '이메일 혹은 패스워드를 확인해주세요' });
  } else {
    delete userInfo.dataValues.password;
    const accessToken = generateAccessToken(userInfo.dataValues);
    const refreshToken = generateRefreshToken(userInfo.dataValues);
    sendAccessToken(res, accessToken);
    sendRefreshToken(res, refreshToken);
    return res.status(200).json({message: '로그인에 성공하였습니다'});
  }
}