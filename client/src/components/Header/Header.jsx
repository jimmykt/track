import "./Header.scss";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import Hamburger from "../Hamburger/Hamburger";
import LoginModel from "../LoginModel/LoginModel";
import SignUpModel from "../SignUpModel/SignUpModel";
import Switch from "../Switch/Switch";

import { logOutUser } from "../../state/actions/userActions";
import { isLogout, isLogin } from "../../state/actions/isLoggedActions";

function Header() {
  const dispatch = useDispatch();

  const [showHamMenu, setShowHamMenu] = useState("dont-show-menu");
  const [showLoginModel, setShowLoginModel] = useState(false);
  const [showSignUpModel, setShowSignUpModel] = useState(false);
  const isLogged = useSelector((state) => state.isLogged);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(isLogout());
      return;
    }
    dispatch(isLogin());
  });

  const toggleHamburger = () => {
    if (showHamMenu === "dont-show-menu") {
      setShowHamMenu("show-menu");
    } else {
      setShowHamMenu("dont-show-menu");
    }
  };

  const toggleLoginModel = () => {
    console.log(isLogged);
    if (isLogged) {
      logOut();
    }
    if (!isLogged) {
      if (showLoginModel) {
        setShowLoginModel(false);
      }
      if (!showLoginModel) {
        setShowLoginModel(true);
      }
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(isLogout());
    dispatch(logOutUser());
  };

  const toggleSignUpModel = () => {
    if (showSignUpModel === true) {
      setShowSignUpModel(false);
      setShowLoginModel(false);
    } else {
      setShowLoginModel(false);
      setShowSignUpModel(true);
    }
  };

  return (
    <div>
      <header className="header">
        <h1 className="header__logo">
          <Link className="header__title-link" to="/">
            Track
          </Link>
        </h1>
        <Hamburger onClick={toggleHamburger} />

        <div className={"header__list " + showHamMenu}>
          <NavLink to="/" className="header__list-item">
            Home
          </NavLink>

          {isLogged ? (
            <NavLink to="/track" className="header__list-item">
              Track
            </NavLink>
          ) : (
            <NavLink
              to="/"
              className="header__list-item"
              onClick={toggleLoginModel}
            >
              track
            </NavLink>
          )}

          <NavLink
            to="/"
            className="header__list-item"
            onClick={toggleLoginModel}
          >
            {isLogged ? "Logout" : "Login/Signup"}
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
