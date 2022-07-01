import React, {  } from 'react';
import './FeatureFirst.css'
import FFimage from './img/FFimage.png'


export default function FeatureFirst() {

return (
  <>
  <div className="ff-title">브루어리 메뉴 정보</div>
  <div className="ff-flex">
    <img className='FFimg' src={FFimage} alt='Feature First img'></img>
  </div>
    <span className='ff-underbar'></span>
    <div className='ff-line-1'>수제 맥주를 판매하는 모든 곳의 정보를 한 번에!</div>
    <div className='ff-line-2'><span>위치, 영업시간, 메뉴</span>와 <span>가격</span>까지 보여드립니다.</div>
  </>
  );
}