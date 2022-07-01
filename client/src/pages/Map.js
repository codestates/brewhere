/*global kakao*/
import React, { useState, useEffect } from 'react';
import {
  Map,
  ZoomControl,
  MapTypeControl,
  CustomOverlayMap,
} from 'react-kakao-maps-sdk';
import EventMarkerContainer from '../components/Map/EventMarkerContainer';
import {
  OverlayBlock,
  OverlayBody,
  OverlayClose,
  OverlayDesc,
  OverlayWrap,
  CustomTitle,
} from '../components/Map/MapStyled';
import axios from 'axios';
import { dummydata } from './mapdata';
//! 서버에 데이터 만들면 없애도 됨

const BrewhereMap = () => {
  const [markered, setMarkered] = useState(dummydata);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState();

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3004/dummy/`)
  //     .then((res) => setMarkered(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  const CustomOverlayBox = () => {
    return (
      <>
        {isOpen && (
          <CustomOverlayMap
            position={{
              lat: `${markered[selectedMarker].coords.lat}`,
              lng: `${markered[selectedMarker].coords.lng}`,
            }}
          >
            <OverlayWrap>
              <OverlayBlock>
                <CustomTitle>
                  {markered[selectedMarker].title}
                  <OverlayClose
                    onClick={() => setIsOpen(false)}
                    title='닫기'
                  ></OverlayClose>
                </CustomTitle>
                <OverlayBody>
                  <div className='img'>
                    <img
                      src={markered[selectedMarker].thumbnail}
                      alt={markered[selectedMarker].title}
                    />
                  </div>
                  <OverlayDesc>
                    <div className='overlayAddress'>
                      {markered[selectedMarker].address}
                    </div>
                    <div className='overlayContact'>
                      {markered[selectedMarker].contacts}
                    </div>
                    <div className='overlayTags'>
                      {markered[selectedMarker].tags}
                    </div>
                  </OverlayDesc>
                </OverlayBody>
              </OverlayBlock>
            </OverlayWrap>
          </CustomOverlayMap>
        )}
      </>
    );
  };

  const CenterPosition = {
    lat: 37.5230201,
    lng: 126.982219,
  };

  return (
    <>
      <Map
        id='map'
        center={CenterPosition}
        style={{
          width: '100vw',
          height: '100vh',
        }}
        level={7}
      >
        {markered.map((position, index) => (
          <EventMarkerContainer
            key={`EventMarkerContainer-${position.coords.lat}-${position.coords.lng}`}
            position={{
              lat: `${position.coords.lat}`,
              lng: `${position.coords.lng}`,
            }}
            onClick={() => {
              setSelectedMarker(index);
              setIsOpen(true);
            }}
            isClicked={selectedMarker === index}
          />
        ))}
        <CustomOverlayBox />
        <MapTypeControl position={kakao.maps.ControlPosition.TOPLEFT} />
        <ZoomControl position={kakao.maps.ControlPosition.LEFT} />
      </Map>
    </>
  );
};

export default BrewhereMap;
