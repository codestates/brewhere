import React, { useEffect, useState } from "react";
import './KakaoMypage.css'

const KakaoMypage = () => {
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();
  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className='kakao-mypage'>
      <h2>{user_id}</h2>
      <h2>{nickName}</h2>
      <img src={profileImage} alt='kakao-profile-image'></img>
    </div>
  );
};
export default KakaoMypage;
