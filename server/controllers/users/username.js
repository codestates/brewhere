const { user } = require('../../models');
const checkTokens = require('../auth');

module.exports = {
  post: async (req, res) => {
    const { user_name } = req.body;
    if (!user_name) {
      res.status(400).send();
    }
    const reduplicatedUsername = await user.findOne({ where: { user_name } });
    if (reduplicatedUsername) {
      res.status(409).json({ message: '중복된 닉네임입니다' });
    } else {
      res.status(200).json({ message: '사용가능한 닉네임입니다' });
    }
  },
  patch: async (req, res) => {
    const userInfo = checkTokens(req);
    if (!userInfo) {
      res.status(401).json({ message: '로그인이 필요합니다' });
    } else {
      const matchedUser = await user.findOne({ where: { id: userInfo.id } });
      await matchedUser.update({ user_name: req.body.user_name });
      res.status(200).json({ user_name: matchedUser.user_name, message: '닉네임이 수정되었습니다' });
    }
  },
};