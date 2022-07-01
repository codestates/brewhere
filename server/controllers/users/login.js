const { users } = require('../../models');
const {
  generateAccessToken,
  generateRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require('../../controllers/tokenFunctions');

module.exports = async (req, res) => {
  const { userEmail, password } = req.body;
  try {
    const userInfo = await users.findOne({
      where: { userEmail },
    });
    if (!userInfo) {
      return res
        .status(401)
        .json({ message: '이메일 혹은 비밀번호를 확인해주세요' });
    } else {
      delete userInfo.dataValues.password;
      const accessToken = generateAccessToken(userInfo.dataValues);
      const refreshToken = generateRefreshToken(userInfo.dataValues);
      sendAccessToken(res, accessToken);
      sendRefreshToken(res, refreshToken);
      return res.status(200).json({ message: '로그인에 성공하였습니다' });
    }
  } catch (err) {
    console.error(err);
  }
};
