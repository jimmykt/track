import "./LoginModel.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_USERS } from "../../util/api";

function LoginModel(props) {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(API_USERS + "/login");
    if (loginUser.email && loginUser.password) {
      axios
        .post(API_USERS + "/login", loginUser)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("please enter password and email");
    }
  };

  return (
    <div className="loginModel">
      <div className="loginModel__content">
        <p className="loginModel__close" onClick={props.toggleLoginModel}>
          X
        </p>
        <form className="loginModel__form" onSubmit={loginHandler}>
          <input
            className="input loginModel__username"
            type="text"
            name="email"
            id="email"
            placeholder="email"
            onChange={(e) =>
              setLoginUser({ ...loginUser, email: e.target.value })
            }
          />
          <input
            className="input loginModel__password"
            type="password"
            name="passowrd"
            id="password"
            placeholder="password"
            onChange={(e) =>
              setLoginUser({ ...loginUser, password: e.target.value })
            }
          />
          <button className="loginModel__login-button">Login</button>
          <p className="loginModel__signup" onClick={props.toggleSignUpModel}>
            SignUp
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginModel;
