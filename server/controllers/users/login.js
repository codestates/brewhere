// 로그인은 정상적으로 되는데 에러가 뜸.
// Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
// 이메일이나 비밀번호를 다르게 쓰면 요청이 가지 않음
const { user } = require('../../models');
const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require('../../controllers/tokenFunctions');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userInfo = await user.findOne({
      where: {useremail : email}
    });
    if(!userInfo) {
      return res.status(401).json({message: '이메일 혹은 비밀번호를 확인해주세요'})
      } else {
        delete userInfo.dataValues.password;
        const accessToken = generateAccessToken(userInfo.dataValues);
        const refreshToken = generateRefreshToken(userInfo.dataValues);
        sendAccessToken(res, accessToken);
        sendRefreshToken(res, refreshToken);
        return res.status(200).json({message: '로그인에 성공하였습니다'});
      }
    } catch(err) {
      console.error(err);
  }
};