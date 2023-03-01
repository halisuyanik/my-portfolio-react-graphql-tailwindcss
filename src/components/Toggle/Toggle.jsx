import React, { useContext } from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../context/ThemeContext";

const Toggle = () => {
  const { state, dispatch } = useContext(themeContext);
  const handleClick = () => {
    dispatch({ type: "toggle" });
    localStorage.setItem("darkMode", !state.darkMode);
  };
  return (
    <div className="toggle" onClick={handleClick} style={{cursor:"none"}}>
      <Moon />
      <Sun />
      <div
        className="t-button"
        style={state.darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;