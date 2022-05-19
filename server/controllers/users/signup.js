const { user } = require('../../models');
const { generateAccessToken } = require('../../controllers/tokenFunctions');

<<<<<<< HEAD
module.exports = async(req, res) => {
  const {username, useremail, password} = req.body;
  // 세분화
  if(!username || !useremail || !password) {
    res.status(400).json({message: '모든 항목은 필수입니다'})
  } else {
    await user.findOrCreate({
      where: {useremail: useremail, username, password},
=======
module.exports = async (req, res) => {
  const { user_name, user_email, password } = req.body;

  if (!user_name || !user_email || !password) {
    res.status(400).json({ message: '모든 항목은 필수입니다' })
  } else {
    await user.findOrCreate({
      where: { user_email: user_email, user_name: user_name },

>>>>>>> 3166b068d04323d6359fab6b5e508247580ec202
    }).then(([users, created]) => {
      if (!created) {
        res.status(409).json({ message: '이미 등록된 이메일입니다' })
      } else {
<<<<<<< HEAD
        const accessToken = generateAccessToken({useremail, password, username});
=======
        const accessToken = generateAccessToken({ user_email, password, user_name });
>>>>>>> 3166b068d04323d6359fab6b5e508247580ec202
        return res.status(201).cookie('accessToken', accessToken, {
          httpOnly: 'true',
          sameSite: 'none',
          secure: 'true'
        }).json({ message: '회원가입 성공' });
      }
    })
  }
}