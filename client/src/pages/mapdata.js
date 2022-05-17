const { kakao } = window;

const dummydata = [
  {
    id: 1,
    title: "서울한남브루어리 한남점",
    img: "./hannamBrew.jpg",
    latlng: new kakao.maps.LatLng(37.53436061233845, 127.00836115582649),
    address: "서울특별시 용산구 한남대로18길 18",
  },
  {
    id: 2,
    title: "아톤브루어리",
    latlng: new kakao.maps.LatLng(37.52853122834166, 126.99310173478068),
    address: "서울특별시 용산구 장문로 23",
  },
  {
    id: 3,
    title: "브루어리304",
    latlng: new kakao.maps.LatLng(37.56925065199314, 126.96262326238998),
    address: "서울특별시 서대문구 통일로11길 7",
  },
  {
    id: 4,
    title: "독립맥주공장",
    latlng: new kakao.maps.LatLng(37.56707698753159, 126.97053639567184),
    address: "서울특별시 중구 정동길 17",
  },
];

export { dummydata };