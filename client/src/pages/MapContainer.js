const { kakao } = window;

export default function KakaoMapScript() {
  const container = document.getElementById('myMap');
  const options = {
    center: new kakao.maps.LatLng(37.5666805, 126.9784147),
    level: 8
  };
  const map = new kakao.maps.Map(container, options);

}
