import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
    {
      name: "Login",
      path: "/login",
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
            <Link
              className={location.pathname == link.path ? "active" : ""}
              to={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
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
