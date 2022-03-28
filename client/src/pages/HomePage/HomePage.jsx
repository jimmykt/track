import "./HomePage.scss";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { API_USERS } from "../../util/api";
import axios from "axios";

import { storeUser } from "../../state/actions/userActions";

function HomePage() {
  const dispatch = useDispatch();

  const User = useSelector((state) => state.User);
  const isLogged = useSelector((state) => state.isLogged);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token && !isLogged) {
      return;
    }
    axios
      .get(API_USERS + "/currentuser", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (Object.keys(User).length === 0) {
          dispatch(storeUser(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <main className="home">
      <h1>Welcome Back {User.firstName}</h1>
      <p className="test">Is Logged? {isLogged ? "yes" : "no"}</p>
    </main>
  );
}

export default HomePage;
