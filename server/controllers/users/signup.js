const { user } = require('../../models');
const { generateAccessToken } = require('../../controllers/tokenFunctions');

module.exports = async(req, res) => {
  const {user_name, user_email, password} = req.body;

  if(!user_name || !user_email || !password) {
    res.status(400).json({message: '모든 항목은 필수입니다'})
  } else {
    await user.findOrCreate({
      where: {user_email: user_email},
      default: {user_name, password}
    }).then(([users, created]) => {
      if(!created) {
        res.status(409).json({message: '이미 등록된 이메일입니다'})
      } else {
        const accessToken = generateAccessToken({user_email, password, user_name, created_at, updated_at});
        return res.status(201).cookie('jwt', accessToken, {
          httpOnly: 'true',
          sameSite: 'none',
          secure: 'true'
        }).json({message: '회원가입 성공'});
      }
    })
  }
}