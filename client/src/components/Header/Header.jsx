import "./Header.scss";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Hamburger from "../Hamburger/Hamburger";
import LoginModel from "../LoginModel/LoginModel";
import SignUpModel from "../SignUpModel/SignUpModel";
function Header() {
  const [isClick, setIsClick] = useState("dont-show-menu");
  const [showLoginModel, setShowLoginModel] = useState(false);
  const [showSignUpModel, setShowSignUpModel] = useState(false);

  const [failedAuth, setFailedAuth] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    console.log(token);
    if (!token) {
      setFailedAuth(true);
      return;
    }
    setFailedAuth(false);
  });

  const toggle = () => {
    if (isClick === "dont-show-menu") {
      setIsClick("show-menu");
    } else {
      setIsClick("dont-show-menu");
    }
  };

  const toggleLoginModel = () => {
    if (failedAuth) {
      if (showLoginModel === true) {
        setShowLoginModel(false);
      } else {
        setShowLoginModel(true);
      }
    } else {
      sessionStorage.removeItem("token");
      setFailedAuth(true);
      console.log("logout");
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
            {failedAuth ? "Login/Signup" : "Logout"}
          </NavLink>
        </div>
      </header>

      {showLoginModel ? (
        <LoginModel
          toggleLoginModel={toggleLoginModel}
          toggleSignUpModel={toggleSignUpModel}
        />
      ) : (
        ""
      )}

      {showSignUpModel ? (
        <SignUpModel toggleSignUpModel={toggleSignUpModel} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
