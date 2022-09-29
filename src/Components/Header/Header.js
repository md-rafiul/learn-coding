import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faKeyboard} className="header-icon" />
      <h2>Learn Coding!</h2>
    </div>
  );
};

export default Header;
