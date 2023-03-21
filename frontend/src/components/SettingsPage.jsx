import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function SettingsPage({
  settings,
  setSettings,
  theme,
  setTheme,
  primaryColor,
  setPrimaryColor,
  fontSize,
  setFontSize,
  animationSpeed,
  setAnimationSpeed,
}) {
  useEffect(() => {
    const root = document.documentElement;
    for (let key in settings) {
      root.style.setProperty(key, settings[key]);
    }
  }, [settings]);

  const themes = [
    {
      "--background-color": "#fff",
      "--background-light": "#fff",
      "--shadow-color": "rgba(0, 0, 0, 0.2)",
      "--text-color": "#0A0A0A",
      "--text-light": "#575757",
    },
    {
      "--background-color": "rgb(29, 29, 29)",
      "--background-light": "rgb(77, 77, 77)",
      "--shadow-color": "rgba(0, 0, 0, 0.2)",
      "--text-color": "#ffffff",
      "--text-light": "#eceaea",
    },
  ];

  function changeTheme(i) {
    const _theme = { ...themes[i] };
    setTheme(i === 0 ? "light" : "dark");
    let _settings = { ...settings };
    for (let key in _theme) {
      _settings[key] = _theme[key];
    }
    setSettings(_settings);
  }

  const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)",
  ];

  function changeColor(i) {
    const _color = primaryColors[i];
    let _settings = { ...settings };
    _settings["--primary-color"] = _color;
    setPrimaryColor(i);
    setSettings(_settings);
  }

  const fontSizes = [
    {
      title: "Small",
      value: "12px",
    },
    {
      title: "Large",
      value: "16px",
    },
  ];

  function changeFontSize(i) {
    const _size = fontSizes[i];
    let _settings = { ...settings };
    _settings["--font-size"] = _size.value;
    setFontSize(i);
    setSettings(_settings);
  }

  const animationSpeeds = [
    {
      title: "Slow",
      value: 2,
    },
    {
      title: "Default",
      value: 1,
    },
    {
      title: "Fast",
      value: 0.5,
    },
  ];

  function changeAnimationSpeed(i) {
    let _speed = animationSpeeds[i];
    let _settings = { ...settings };
    _settings["--animation-speed"] = _speed.value;
    setAnimationSpeed(i);
    setSettings(_settings);
  }

  return (
    <div>
      <Navbar />
      <div className="container main">
        <div className="section d-block">
          <h2>Preferred Theme</h2>
          <div className="options-container">
            <div className="option light" onClick={() => changeTheme(0)}>
              {theme === "light" && (
                <div className="check">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              )}
            </div>
            <div className="option dark" onClick={() => changeTheme(1)}>
              {theme === "dark" && (
                <div className="check">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="section d-block">
          <h2>Preferred Color</h2>
          <div className="options-container">
            {primaryColors.map((color, index) => (
              <div
                className="option light"
                style={{ backgroundColor: color }}
                onClick={() => changeColor(index)}
              >
                {primaryColor === index && (
                  <div className="check">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="section d-block">
          <h2>Font Size</h2>
          <div className="options-container">
            {fontSizes.map((size, index) => (
              <button className="btn" onClick={() => changeFontSize(index)}>
                {size.title}
                {fontSize === index && (
                  <span>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="section d-block">
          <h2>Animation Speed</h2>
          <div className="options-container">
            {animationSpeeds.map((speed, index) => (
              <button
                className="btn"
                onClick={() => changeAnimationSpeed(index)}
              >
                {speed.title}
                {animationSpeed === index && (
                  <span>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SettingsPage;
