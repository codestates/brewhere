import React from "react";
import Photo from "./hannamBrew.jpg";
import "./Brewery.css";

export default function Brewery() {
  return (
    <>
      <div className="breweryPage">
        <div className="brewContainer">
          <div className="pageTop">
            <div className="brewName">서울브루어리 한남점</div>
            <div className="address">서울 용산구 한남대로 18길 18 2,3층</div>
          </div>
          <div className="brewContents">
            <div className="pageLeft">
              <img className="brewPhoto" src={Photo} alt="store photo" />
            </div>
            <div className="pageRight">
              <div className="officeHour">
                <div className="infoTitle">영업시간</div>
                <p>수~금 17:00 ~ 24:00</p>
                <p>토,일 13:00 ~ 24:00</p>
                <p>공휴일 13:00 ~ 24:00</p>
                <p>
                  <span>휴무일</span> 월, 화요일
                </p>
              </div>
              <div className="aboutBrew">
                <div className="infoTitle">About</div>
                <p>
                  합정동 당인리발전소 인근에 오픈한 서울브루어리는 크래프트비어
                  브루펍입니다. 일본 디자이너 마키시나미와 함께 작업한, 주택을
                  개조하여 만든 브루어리에서 색다른 경험을 즐겨보세요.
                  서울브루어리에서는 직접 만든 맛있는 크래프트 비어의 다양함을
                  경험하실 수 있으며, 세계 각국에서 실력을 갈고 닦은 쉐프의
                  다양한 음식도 즐기실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
