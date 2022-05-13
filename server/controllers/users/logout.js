const checkTokens = require('../auth');

module.exports = (req, res) => {
  const userInfo = checkTokens(req);

  if(!userInfo) {
    res.status(401).json({message: '로그인이 필요합니다'})
  } else {
    try {
      return res.clearCookie('refreshToken', {
        httpOnly: 'true',
        sameSite: 'none',
        secure: 'true'
      }).status(200).json({message: '로그아웃 되었습니다'});
    } catch(err) {
      res.status(400).json({message: '잘못된 요청입니다'});
    }
  }
}