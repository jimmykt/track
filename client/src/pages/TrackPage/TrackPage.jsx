import "./TrackPage.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_USERS, API_TRACK } from "../../util/api";
import { useSelector, useDispatch } from "react-redux";
import { storeUser } from "../../state/actions/userActions";
import Expenses from "../../components/Expenses/Expenses";

function TrackPage() {
  const User = useSelector((state) => state.User);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const [newExpense, setNewExpense] = useState({
    name: "",
    price: "",
    type: "",
    _id: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
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
          console.log(Object.keys(User).length);
          dispatch(storeUser(response.data));
        }
      })
      .then(() => {
        if (newExpense._id === "") {
          console.log(User);
          setNewExpense({ ...newExpense, _id: User._id });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log("can't find user");
      });
  });

  useEffect(() => {
    console.log("effect");
  }, [User.Expense]);

  const addExpense = (e) => {
    if (User._id) {
      axios
        .post(API_TRACK + "/expense", newExpense)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log(User._id);
    }
  };

  var userArrySize = Object.keys(User).length;

  if (userArrySize > 0) {
    console.log();
    return (
      <main className="track">
        <h1>monthly expense</h1>
        <form onSubmit={addExpense}>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Expense"
            onChange={(e) =>
              setNewExpense({ ...newExpense, name: e.target.value })
            }
          />
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Price"
            onChange={(e) =>
              setNewExpense({ ...newExpense, price: e.target.value })
            }
          />
          <select
            name="selectList"
            id="selectList"
            onChange={(e) =>
              setNewExpense({ ...newExpense, type: e.target.value })
            }
          >
            <option value="Utility">Utility</option>
            <option value="Leisure">Leisure</option>
          </select>

          <button>Add</button>
        </form>

        <Expenses />
      </main>
    );
  } else {
    return <div>loading</div>;
  }
}

export default TrackPage;
