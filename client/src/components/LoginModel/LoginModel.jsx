import "./LoginModel.scss";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { API_USERS } from "../../util/api";
import { useDispatch } from "react-redux";

import { isLogin } from "../../state/actions/isLoggedActions";

function LoginModel(props) {
  const dispatch = useDispatch();

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const inputReference = useRef(null);

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();
    if (loginUser.email && loginUser.password) {
      axios
        .post(API_USERS + "/login", loginUser)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          console.log(res.data);
          dispatch(isLogin());
          props.toggleLoginModel();
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
            ref={inputReference}
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
