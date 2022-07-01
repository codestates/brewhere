import React from "react";
import FSimg from "./img/FSimg.png";
import kakaomapImg from "./img/kakaomap.png";
import "./FeatureSecond.css";

export default function FeatureSecond() {
  return (
    <>
      <div className="fs-flex">
        <img className="FSimg" src={FSimg} alt="Feature First img"></img>
        <div className="fs-line">
          <div className="fs-title">카카오 맵 API</div>
          <div>카카오 맵을 이용하여</div>
          <div>위치 확인이 편리합니다.</div>
        </div>
      </div>
    </>
  );
}
