import "./Header.scss";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Hamburger from "../Hamburger/Hamburger";

function Header() {
  const [isClick, setIsClick] = useState("dont-show-menu");

  const toggle = () => {
    if (isClick === "dont-show-menu") {
      setIsClick("show-menu");
    } else {
      setIsClick("dont-show-menu");
    }
  };

  return (
    <header class="header">
      <h1 className="header__logo">Track</h1>
      <Hamburger onClick={toggle} />
      <div className={"header__list " + isClick}>
        <NavLink to="/" className="header__list-item">
          Home
        </NavLink>
        <NavLink to="/" className="header__list-item">
          Track
        </NavLink>
        <NavLink to="/login" className="header__list-item">
          Login/SignUp
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
