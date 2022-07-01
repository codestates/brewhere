import React, { useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';

const BASIC_MARKER_WIDTH = 30;
const BASIC_MARKER_HEIGHT = 35;
const OFFSET_X = 14;
const OFFSET_Y = 38;
const SPRITE_MARKER_URL = 'https://i.ibb.co/M6SNY9k/brewhere-pin-sprite.png';
const SPRITE_WIDTH = 110;
const SPRITE_HEIGHT = 35;
const SPRITE_GAP = 10;

const EventMarkerContainer = ({ position, onClick, isClicked }) => {
  const [isOver, setIsOver] = useState(false);

  const gapX = BASIC_MARKER_WIDTH + SPRITE_GAP;
  const normalOrigin = { x: 0, y: 0 };
  const clickOrigin = { x: gapX, y: 0 };
  const overOrigin = { x: gapX * 2, y: 0 };

  let spriteOrigin = isOver ? overOrigin : normalOrigin;

  if (isClicked) {
    spriteOrigin = clickOrigin;
  }
  const isOvered = () => {
    setIsOver(true);
  };
  const isOuted = () => {
    setIsOver(false);
  };

  return (
    <MapMarker
      position={position}
      onClick={onClick}
      onMouseOver={isOvered}
      onMouseOut={isOuted}
      image={{
        src: SPRITE_MARKER_URL,
        size: {
          width: BASIC_MARKER_WIDTH,
          height: BASIC_MARKER_HEIGHT,
        },
        options: {
          offset: { x: OFFSET_X, y: OFFSET_Y },
          spriteSize: {
            width: SPRITE_WIDTH,
            height: SPRITE_HEIGHT,
          },
          spriteOrigin: spriteOrigin,
        },
      }}
    ></MapMarker>
  );
};

export default EventMarkerContainer;
