// 포스트맨 응답 결과 원래 닉네임과 다른 닉네임으로 수정하여 send해도 409가 뜸.
const { user } = require('../../models');

module.exports = async(req, res) => {
  const {user_name} = req.body;
  if(!user_name) {
    res.status(400).json({message: '잘못된 요청입니다'});
  } else {
    const reduplicatedUsername = await user.findOne({
      where: {user_name}
    });
    if(reduplicatedUsername) {
      res.status(409).json({message: '이미 사용 중인 닉네임입니다'});
    } else {
      res.status(200).json({data: {user_name: user_name}, message: '사용 가능한 닉네임입니다'});
    }
  }
};