import React from "react";
import styled from "styled-components";
import { dummydata } from "./mapdata";

const positions = dummydata;
const dataLoop = () => {
  for (let i = 0; i < positions.length; i++) {
    return positions[i];
  }
};

const MainContainer = styled.div`
  width: 300px;
`;

const IwStyle = styled.div`
  background-color: red;
  padding: 30px;
`;

function Something() {
  return `
    <>
      <MainContainer>
        <IwStyle>${dataLoop.title}</IwStyle>
      </MainContainer>
    </>`;
}

export default Something;
