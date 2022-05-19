const { user } = require('../../models');
const checkTokens = require('../auth');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = async(req, res) => {
  const userInfo = checkTokens(req);
  if (!userInfo) {
    res.status(401).json({message: '로그인이 필요합니다'});
  } else {
    const matchedUser = await user.findOne({ 
      where: { id: userInfo.id } 
    });
    bcrypt.hash(req.body.password, saltRounds, async(err, hash) => {
      try {
        await matchedUser.update({password: hash});
        res.status(200).json({message: '비밀번호가 수정되었습니다'});
      } catch(err) {
        res.status(400).json({message: '잘못된 요청입니다'});
      }
    });

    // 비밀번호를 확인할 때 / 수정한 비밀번호와 일치하는게 맞는지 확인하기 위한 compare
    // 나중에 수정할 사항1
    bcrypt.compare(req.body.password, hash, function(err, result) {
      try {
        res.status(200).json({data: result, message: '비밀번호가 수정되었습니다'});
      } catch(err) {
        res.status(400).json({message: '잘못된 요청입니다'});
      }
    });
  }
};