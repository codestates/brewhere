require('dotenv').config();
const axios = require('axios');
axios.defaults.withCredentials = true;
const { user } = require('../../models');
const { generateAccessToken, generateRefreshToken } = require('../../controllers/tokenFunctions');

module.exports = {
  kakaoLogin: async (req, res) => {
    try {
      const authorizationCode = req.body.authorizationCode;
      const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
      const KAKAO_REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;
      const KAKAO_CLIENT_SECRET = process.env.KAKAO_CLIENT_SECRET;
      const grantType = 'authorization_code';

      if (authorizationCode) {
        const response = await axios({
          method: 'POST',
          url: `https://kauth.kakao.com/oauth/token?code=${authorizationCode}&client_id=${KAKAO_CLIENT_ID}&client_secret=${KAKAO_CLIENT_SECRET}&redirect_uri=${KAKAO_REDIRECT_URI}&grant_type=${grantType}`,
          headers: {
            'Content-type': 'application/x-www-form-urlencoded',
          },
        });

        const { access_token } = response.data;

        const kakaoUserInfo = await axios({
          method: 'GET',
          url: 'https://kapi.kakao.com/v2/user/me',
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-type': 'application/x-www-form-urlencoded',
          },
        });

        const { email, profile } = kakaoUserInfo.data.kakao_account;
        const { id } = kakaoUserInfo.data;
        const [newUserInfo, created] = await user.findOrCreate({
          where: {
            kakao_id: String(id),
          },
          defaults: {
            username: `kakao_${profile.username}`,
            user_email: email || '',
            kakao_oauth_token: access_token,
            signup_method: 'kakao',
            kakao_id: String(id),
          },
        });

        delete newUserInfo.dataValues.password;

        const newAccessToken = generateAccessToken(newUserInfo.dataValues);
        const refreshToken = generateRefreshToken(newUserInfo.dataValues);
        if (created) {
          return res
            .cookie('refreshToken', refreshToken, {
              sameSite: 'none',
              secure: true,
              httpOnly: true,
            })
            .status(201)
            .json({ accessToken: newAccessToken, signup_method: 'kakao' });
        } else {
          return res
            .cookie('refreshToken', refreshToken, {
              sameSite: 'none',
              secure: true,
              httpOnly: true,
            })
            .status(200)
            .json({ accessToken: newAccessToken, signup_method: 'kakao' });
        }
      }
    } catch(err) {
      return res.status(400).json({ message: '잘못된 요청입니다' });
    }
  },
};