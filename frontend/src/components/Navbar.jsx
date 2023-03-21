/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Button, Popover } from "@mui/material";
import { saveTokenAction } from "../redux/actions";
import UserSettings from "./UserSettings";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const token = useSelector((state) => state.user.accessToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const user = useSelector((state) => state.user.user);
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
  ];
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(saveTokenAction(""));
    navigate("/login");
  };
  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      <div className="navbar container">
        <Link to="/" className="logo">
          <span>L</span>iquid<span>L</span>ibrary
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
          {!user ? (
            <Link
              className={location.pathname === "/login" ? "active" : ""}
              to="/login"
              key="Login"
            >
              Login
            </Link>
          ) : (
            <Link>
              {" "}
              <img
                src={user.avatar}
                alt=""
                className="userAvatar"
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
              />
            </Link>
          )}
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
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div>
          <div>
            <Button
              variant="outlined"
              onClick={() => navigate("/addNew")}
              className="userButton"
            >
              Add Cocktail
            </Button>
          </div>
          <div>
            <UserSettings />
          </div>
          <div>
            <Button variant="outlined" onClick={logout} className="userButton">
              Logout
            </Button>
          </div>
        </div>
      </Popover>
    </>
  );
}

export default Navbar;
