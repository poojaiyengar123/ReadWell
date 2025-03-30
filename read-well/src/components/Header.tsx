import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/readwell-logo.png";
import "./styles.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
    </header>
  );
};

export default Header;
