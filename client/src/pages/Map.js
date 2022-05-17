/*global kakao*/
import React, { useEffect } from "react";
import { dummydata } from "./mapdata";

const Location = () => {
  useEffect(() => {
    const mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.52406330545825, 126.98054529969014), // 지도의 중심좌표
        level: 7, // 지도의 확대 레벨
      };

    const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커를 표시할 위치와 title 객체 배열입니다
    const positions = dummydata;

    // 마커 이미지의 이미지 주소입니다
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (let i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
        clickable: true,
      });
      // 마커를 지도에 표시합니다.
      marker.setMap(map);

      // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
      const iwContent = `<div class="infoName" style="padding:5px;">${positions[i].title}</div>`,
        // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwRemoveable = true; // removeable 속성을 true 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

      // 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커 위에 인포윈도우를 표시합니다
        infowindow.open(map, marker);
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
