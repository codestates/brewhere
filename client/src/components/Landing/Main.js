import React from "react";
import { NavLink } from "react-router-dom";
import doublearrow from "./img/double_arrow_white.png";
import "./Main.css";

export default function Main() {
  return (
    <>
      <div className="main">
        <div id="mainTop">
          <div className="mainTitle">
            <span>맥주</span>를 사랑하는 당신을 위하여
          </div>
          <div className="mainTitle">
            나만의 <span>맥주</span>를 찾고 싶은 당신을 위하여
          </div>
          <div className="slogan">
            Brew where ?<span id="bigSlogan">Brew here !</span>
          </div>
          <div className="startBtn">
            <p>
              <NavLink to="/map">Let's Brew</NavLink>
            </p>
          </div>
        </div>
        <div className="scrollDown">
          <p>scroll down</p>
          <img src={doublearrow} alt="scroll down arrow"></img>
        </div>
      </div>
    </>
  );
}
