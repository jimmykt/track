import "./SignUpModel.scss";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { API_USERS } from "../../util/api";
import { useDispatch } from "react-redux";
import { isLogin } from "../../state/actions/isLoggedActions";

function SignUpModel(props) {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signUpResponse, setSignUpResponse] = useState();

  const inputReference = useRef(null);

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  const signUpHandler = (e) => {
    e.preventDefault();
    if (newUser.password === newUser.confirmPassword) {
      axios
        .post(API_USERS + "/signup", newUser)
        .then((res) => {
          props.toggleSignUpModel();
        })
        .then(() => {
          const loginUser = {
            email: newUser.email,
            password: newUser.password,
          };
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
        })
        .catch((error) => {
          setSignUpResponse(error.response.data);
          console.log(error.response.data);
        });
    } else {
      console.log("password dont match");
    }
  };

  return (
    <div className="signup-model">
      <div className="signup-model__content">
        <img
          className="signup-model__close"
          onClick={props.toggleSignUpModel}
          src={require("../../assets/images/close-icon.png")}
          alt="piggy bank"
        />

        <form className="signup-model__form" onSubmit={signUpHandler}>
          <input
            className="signup-model__input"
            ref={inputReference}
            type={"text"}
            name={"first-name"}
            id={"first-name"}
            placeholder="First Name"
            onChange={(e) =>
              setNewUser({ ...newUser, firstName: e.target.value })
            }
          />

          <input
            className="signup-model__input"
            type={"text"}
            name={"last-name"}
            id={"last-name"}
            placeholder="Last Name"
            onChange={(e) =>
              setNewUser({ ...newUser, lastName: e.target.value })
            }
          />

          <input
            className="signup-model__input"
            type={"text"}
            name={"email"}
            id={"email"}
            placeholder="email"
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />

          <input
            className="signup-model__input"
            type={"password"}
            name={"password"}
            id={"password"}
            placeholder="Password"
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
          <input
            className="signup-model__input"
            type={"password"}
            name={"password-confirm"}
            id={"password-confirm"}
            placeholder="Confirm Password"
            onChange={(e) =>
              setNewUser({ ...newUser, confirmPassword: e.target.value })
            }
          />
          <button className="signup-model__button">Sign Up</button>
          <span className="signup-model__response">{signUpResponse}</span>
        </form>
      </div>
    </div>
  );
}

export default SignUpModel;
