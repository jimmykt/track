import "./SignUpModel.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_USERS } from "../../util/api";

function SignUpModel(props) {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signUpHandler = (e) => {
    e.preventDefault();
    if (newUser.password === newUser.confirmPassword) {
      axios
        .post(API_USERS + "/signup", newUser)
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("password dont match");
    }
  };

  return (
    <div className="signup-model">
      <div className="signup-model__content">
        <p className="signup-model__close" onClick={props.toggleSignUpModel}>
          X
        </p>

        <form className="signup-model__form" onSubmit={signUpHandler}>
          <input
            className="signup-model__input"
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
          <span className="signup-model__error"></span>
        </form>
      </div>
    </div>
  );
}

export default SignUpModel;
