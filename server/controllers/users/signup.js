// 포스트맨 응답 결과 이메일 주소만 데이터베이스에 저장이 되고 닉네임과 비밀번호는 제대로 저장이 되지 않음.
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
        const accessToken = generateAccessToken({user_email, password, user_name});
        return res.status(201).cookie('accessToken', accessToken, {
          httpOnly: 'true',
          sameSite: 'none',
          secure: 'true'
        }).json({message: '회원가입 성공'});
      }
    })
  }
}