const { user } = require('../../models');


module.exports = async(req, res) => {
  const {user_email} = req.body;

  if(!user_email) {
    res.status(400).json({message: '잘못된 요청입니다'});
  } else {
    const reduplicatedEmail = await user.findOne({
      where: {user_email}
    });
    if(reduplicatedEmail) {
      res.status(409).json({message: '이미 등록된 이메일입니다'});
    } else {
      res.status(200).json({data: {user_email: user_email}, message: '사용가능한 이메일입니다'});
    }
  }
};