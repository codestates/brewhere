import React, {  } from 'react';
import FSimg from './img/FSimg.png'
import kakaomapImg from './img/kakaomap.png'
import './FeatureSecond.css'

export default function FeatureSecond() {

return (
  <>
    <div className="fs-flex">
      <img className='FSimg' src={FSimg} alt='Feature First img'></img>
      <div className='fs-line'>
      <div className="fs-title">카카오 맵 API</div>
        <div>카카오 맵 연동으로 <img className='kakao-map-img' alt='kakao-map-img' src={kakaomapImg} /> </div> 
        <div><span>카카오톡</span> 위치 공유도 간편합니다.</div>
      </div>
    </div>
  </>
  );
}