/*global kakao*/
//! Do run 팀의 Map.js 복사본 입니다. 참고용으로 가져왔고, 실제 맵 구현 이후 삭제 예정입니다.
import React, { useState, useEffect } from "react";
import "./Map.css";
const { REACT_APP_KAKAO_MAP } = process.env;

export default function Map() {
  const [state, setState] = useState(true);
  const [map, setMap] = useState(null);

  const createMap = () => {
    let container = document.getElementById("myMap");
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${REACT_APP_KAKAO_MAP}&autoload=false`;
    document.body.appendChild(script);

    script.onload = () => {
      const { kakao } = window;
      kakao.maps.load(() => {
        let options = {
          center: new kakao.maps.LatLng(37.52406330545825, 126.98054529969014),
          level: 7,
          draggable: true,
          disableDoubleClickZoom: false,
        };
        const createdMap = new kakao.maps.Map(container, options);
        setMap(createdMap);
      });
    };
  };

  useEffect(() => {
    if (state) {
      createMap();
    }
    return () => setState(false);
  }, []);

  return (
    <>
      <div
        id="myMap"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      ></div>
    </>
  );
}
