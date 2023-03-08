import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import {
  faHome,
  faList,
  faCog,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/",
      icon: faCog,
    },
    {
      name: "Login",
      path: "/",
      icon: faUser,
    },
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">
          <span>L</span>iquid<span>L</span>ibrary
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a href="#!" key={link.name}>
              {link.name}
            </a>
          ))}
          {/* <a href="#!">Home</a>
          <a href="#!">Recipes</a>
          <a href="#!">Settings</a>
          <a href="#!">Login</a> */}
        </div>
        <div
          onClick={() => setShowSidebar(true)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}

export default Navbar;
