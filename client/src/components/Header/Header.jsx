import "./Header.scss";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
import LoginModel from "../LoginModel/LoginModel";
import SignUpModel from "../SignUpModel/SignUpModel";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../state/actions/isLoggedActions";

function Header() {
  const dispatch = useDispatch();

  const [isClick, setIsClick] = useState("dont-show-menu");
  const [showLoginModel, setShowLoginModel] = useState(false);
  const [showSignUpModel, setShowSignUpModel] = useState(false);

  const isLogged = useSelector((state) => state.isLogged);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    console.log(token);
    if (!token) {
      dispatch(logout());
      return;
    }
    dispatch(login());
  });

  const toggleHamburger = () => {
    if (isClick === "dont-show-menu") {
      setIsClick("show-menu");
    } else {
      setIsClick("dont-show-menu");
    }
  };

  const toggleLoginModel = () => {
    if (!isLogged) {
      if (showLoginModel) {
        setShowLoginModel(false);
      } else {
        setShowLoginModel(true);
      }
    } else {
      sessionStorage.removeItem("token");
      dispatch(logout());
      console.log("logout");
    }
  };

  const toggleSignUpModel = () => {
    if (showSignUpModel === true) {
      setShowSignUpModel(false);
      setShowLoginModel(false);
    } else {
      setShowLoginModel(false);
      setShowSignUpModel(true);
    }
    console.log(showSignUpModel);
  };

  return (
    <div>
      <header className="header">
        <h1 className="header__logo">Track</h1>
        <Hamburger onClick={toggleHamburger} />
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
