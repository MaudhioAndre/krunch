import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import "../assets/styles/header.scss";

export default function Header(props) {
  const [classMenu, setclassMenu] = useState("topnav");

  function toggleMenu() {
    console.log("toggleMenu");
    if (classMenu === "topnav") {
      setclassMenu(classMenu + " responsive");
    } else {
      setclassMenu("topnav");
    }
  }

  function menu(params) {
    return (
      <div className={`${classMenu} ${params}`}>
        <div className="div-logo">
          <img src={require("../assets/img/logo.png")} className="logo" />
          <div onClick={() => toggleMenu()} className="icon-headers mobile">
            <FontAwesomeIcon
              className="icon-headers mobile"
              icon={classMenu == "topnav" ? faBars : faXmark}
            />
          </div>
        </div>
        <div className="menu-headers">
          <a
            className="menu-nav"
            id={props.currentContent == "home" && "active"}
            href="#home"
          >
            HOME
          </a>
          <a
            className="menu-nav"
            id={props.currentContent == "about" && "active"}
            href="#about"
          >
            ABOUT
          </a>
          <a
            className="menu-nav"
            id={props.currentContent == "portfolio" && "active"}
            href="#portfolio"
          >
            PORTFOLIO
          </a>
          <a
            className="menu-nav"
            id={props.currentContent == "services" && "active"}
            href="#services"
          >
            SERVICES
          </a>
          <a
            className="menu-nav"
            id={props.currentContent == "team" && "active"}
            href="#team"
          >
            TEAM
          </a>
          <a
            className="menu-nav"
            id={props.currentContent == "news" && "active"}
            href="#news"
          >
            NEWS
          </a>
          <a
            className="menu-nav"
            id={props.currentContent == "contact" && "active"}
            href="#contact"
          >
            CONTACT
          </a>
        </div>
      </div>
    );
  }

  function tampilMenu() {
    var m = [];
    m.push(menu());
    m.push(menu(props.className));
    return m;
  }

  return tampilMenu();
}
