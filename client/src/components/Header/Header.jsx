import "./Header.scss";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Hamburger from "../Hamburger/Hamburger";
import LoginModel from "../LoginModel/LoginModel";
import SignUpModel from "../SignUpModel/SignUpModel";
function Header() {
  const [isClick, setIsClick] = useState("dont-show-menu");

  const [showLoginModel, setShowLoginModel] = useState(false);
  const [showSignUpModel, setShowSignUpModel] = useState(false);

  const toggle = () => {
    if (isClick === "dont-show-menu") {
      setIsClick("show-menu");
    } else {
      setIsClick("dont-show-menu");
    }
  };

  const toggleLoginModel = () => {
    if (showLoginModel === true) {
      setShowLoginModel(false);
    } else {
      setShowLoginModel(true);
    }
  };

  const toggleSignUpModel = () => {
    if (showSignUpModel === true) {
      setShowSignUpModel(false);
      setShowLoginModel(false);
    } else {
      setShowSignUpModel(true);
    }
    console.log(showSignUpModel);
  };

  return (
    <div>
      <header className="header">
        <h1 className="header__logo">Track</h1>
        <Hamburger onClick={toggle} />
        <div className={"header__list " + isClick}>
          <NavLink to="/" className="header__list-item">
            Home
          </NavLink>
          <NavLink to="/" className="header__list-item">
            Track
          </NavLink>
          <NavLink
            to="/"
            className="header__list-item"
            onClick={toggleLoginModel}
          >
            Login/SignUp
          </NavLink>
        </div>
      </header>
      {showLoginModel ? (
        <LoginModel onClick={toggleLoginModel} signUp={toggleSignUpModel} />
      ) : (
        ""
      )}
      {showSignUpModel ? <SignUpModel toggle={toggleSignUpModel} /> : ""}
    </div>
  );
}

export default Header;
