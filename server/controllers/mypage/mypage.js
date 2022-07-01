const checkTokens = require('../auth');

module.exports = (req, res) => {
  const userInfo = checkTokens(req);

  if(!userInfo) {
    res.status(401).json({message: '로그인이 필요합니다'});
  } else {
    try {
      delete userInfo.dataValues.password;
      res.status(200).json({message: '성공적으로 불러왔습니다'});
    } catch(err) {
      res.status(400).json({message: '잘못된 요청입니다'});
    }
  }
}