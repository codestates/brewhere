import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoHorizontal from "./img/logo_x0.25_horizontal.png";
import LoginModal from "../Modal/Login/Login";
import MenuModal from "../Modal/Menu/Menu";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="nav-logo">
            <NavLink to="/" className="nav-links">
              <img
                className="nav-logo-img"
                src={logoHorizontal}
                alt="logo"
              ></img>
            </NavLink>
          </div>
          <div className="nav-button">
            <div className="nav-links nav-login">
              <LoginModal />
            </div>
            <div className="nav-links nav-menu">
              <MenuModal />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
