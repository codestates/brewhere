const { users } = require('../../models');
const { generateAccessToken } = require('../../controllers/tokenFunctions');

module.exports = async (req, res) => {
  const { userName, userEmail, password } = req.body;
  // 세분화

  if (!userName || !userEmail || !password) {
    res.status(400).json({ message: '모든 항목은 필수입니다' });
  } else {
    await users
      .findOrCreate({
        where: { userEmail, userName, password },
      })
      .then(([users, created]) => {
        if (!created) {
          res.status(409).json({ message: '이미 등록된 이메일입니다' });
        } else {
          const accessToken = generateAccessToken({
            userEmail,
            password,
            userName,
          });
          return res
            .status(201)
            .cookie('accessToken', accessToken, {
              httpOnly: 'true',
              sameSite: 'none',
              secure: 'true',
            })
            .json({ message: '회원가입 성공' });
        }
      });
  }
};
