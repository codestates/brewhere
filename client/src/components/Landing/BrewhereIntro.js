import React, {  } from 'react';
import logo_x05_square from './img/logo_x05_square.png'
import './BrewhereIntro.css'

export default function BrewhereIntro() {

return (
  <>
    <div className="brewhereIntro">
      <img className='logoSquare' src={logo_x05_square} alt='brewhere logo square'></img>
      <div className='rightBox'>
        <div className='title'>Brew where? Brew here!</div>
        <span className='underBar'></span>
        <div className='introText'>
          <div className='line'>국내 수제 맥주의 맛은 <span>수 백 가지</span>가 넘습니다</div>
          <div className='line'>그 중 내 입맛에 맞는 맥주를 찾기란 쉽지 않죠</div>
          <div className='line'>대한민국의 다양한 수제 맥주가 모여있는</div>
          <div className='line'><span>서울</span>에서 나만의 맥주를 찾아보세요</div>
        </div>
      </div>
    </div>
  </>
  );
}