import "./HomePage.scss";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { API_USERS } from "../../util/api";
import axios from "axios";

import { storeUser } from "../../state/actions/userActions";

function HomePage() {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.isLogged);
  const User = useSelector((state) => state.User);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    axios
      .get(API_USERS + "/currentuser", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        dispatch(storeUser(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <main className="home">
      <h1>Welcome Back! {User}</h1>

      <p className="test">Is Logged? {isLogged ? "yes" : "no"}</p>
    </main>
  );
}

export default HomePage;
