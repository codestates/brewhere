/*global kakao*/
import React, { useEffect } from "react";
import { dummydata } from "./mapdata";
import marker_yellow from "./images/marker_yellow.png";

const Location = () => {
  useEffect(() => {
    const mapContainer = document.getElementById("map"),
      mapOption = {
        center: new kakao.maps.LatLng(37.52406330545825, 126.98054529969014),
        level: 7,
      };

    const map = new kakao.maps.Map(mapContainer, mapOption);
    const positions = dummydata;
    const imageSrc = marker_yellow;

    for (let i = 0; i < positions.length; i++) {
      const imageSize = new kakao.maps.Size(24, 35);
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(positions[i].lat, positions[i].lng),
        title: positions[i].title,
        image: markerImage,
        clickable: true,
      });
      // 마커를 지도에 표시합니다.
      marker.setMap(map);

      const iwContent = `
        <div style="width: 300px;">
          <div class="infoBox" style="text-align: center">
            <a href="/store" class="iwTitle" style="font-size: 20px; font-weight: 700;">${positions[i].title}</a>
            <div class="brewAddress" style="font-family: 'Roboto">${positions[i].address}</div>
            <div class="contactNum" style="font-family: 'Roboto">${positions[i].contacts}</div>
            <img style="width:100px; height:100px;" src=${positions[i].img}>
            <div class="tags" style="font-family: 'Roboto">${positions[i].tags}</div>
          </div>          
        </div>`;
      const iwRemoveable = true;
      const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });
      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
      kakao.maps.event.addListener(marker, "mouseleave", function () {
        infowindow.close();
      });

      //! 마우스를 올렸을 때 상점이름만 미리보기 및 해당 핀 이미지 전환 (핀 이미지 전환에 대한 useState 사용 해야됨)

      const moContent = `<div style="width: 200px; height: 30px; text-align: center; margin: 10px; font-size: 20px; font-family: 'Roboto;">${positions[i].title}</div>`;

      const moInfo = new kakao.maps.InfoWindow({
        content: moContent,
      });

      kakao.maps.event.addListener(marker, "mouseover", function () {
        // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
        moInfo.open(map, marker);
      });
      // 마커에 마우스아웃 이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "mouseout", function () {
        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        moInfo.close();
      });
    }
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
    </div>
  );
};

export default Location;

// import React, { useEffect, useRef } from "react";
// import { markerdata } from "./mapdata";

// const Map = () => {
//   const mapContainer = useRef(null);
//   const { kakao } = window;

//   const mapOptions = {
//     center: new kakao.maps.LatLng(37.52406330545825, 126.98054529969014),
//     level: 4,
//     setMapTypeId: kakao.maps.MapTypeId.ROADMAP,
//   };

//   const position = new kakao.maps.LatLng(
//     `${markerdata[0].lat}`,
//     `${markerdata[0].lng}`
//   );

//   const content = `<div class="customOverlay">
//     <img class="overlayImg" src=${markerdata[0].img}/>
//     <div class="infoContainer">
//       <div class="infoName">${markerdata[0].title}</div>
//       <p class="infoRegion"${markerdata[0].address}</p>
//     </div>
//     </div>
//     `;

//   useEffect(() => {
//     const map = new kakao.maps.Map(mapContainer.current, mapOptions);
//     const marker = new kakao.maps.Marker({ position });

//     new kakao.maps.CustomOverlay({
//       map,
//       position,
//       content,
//     });
//     marker.setMap(map);
//   }, []);

//   return (
//     <div
//       id="map"
//       ref={mapContainer}
//       style={{ width: "100vw", height: "100vh" }}
//     ></div>
//   );
// };

// export default Map;
