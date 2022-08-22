import "./TrackPage.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";

import { API_USERS, API_TRACK } from "../../util/api";
import { storeUser } from "../../state/actions/userActions";
import Expenses from "../../components/Expenses/Expenses";

function TrackPage() {
  const User = useSelector((state) => state.User);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const [newExpense, setNewExpense] = useState({
    name: "",
    price: "",
    type: "Utility",
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
          dispatch(storeUser(response.data));
        }
      })
      .then(() => {
        if (newExpense._id === "") {
          setNewExpense({ ...newExpense, _id: User._id });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log("can't find user");
      });
  });

  const addExpense = (e) => {
    if (User._id && !isNaN(newExpense.price)) {
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
      console.log("number for price please");
    }
  };

  const addDefaultData = () => {
    const data = [
      {
        name: "Netflix",
        price: "18.63",
        type: "Leisure",
        _id: User._id,
      },
      {
        name: "Spotify",
        price: "18.07",
        type: "Leisure",
        _id: User._id,
      },
      {
        name: "Phone Plan",
        price: "65.50",
        type: "Utility",
        _id: User._id,
      },
      {
        name: "Home Internet",
        price: "152.99",
        type: "Utility",
        _id: User._id,
      },
      {
        name: "Pizza",
        price: "24.50",
        type: "Leisure",
        _id: User._id,
      },
      {
        name: "Hyrdo",
        price: "150",
        type: "Utility",
        _id: User._id,
      },
      {
        name: "Dinner with friends",
        price: "42.50",
        type: "Leisure",
        _id: User._id,
      },
      {
        name: "Car Gas",
        price: "75.88",
        type: "Utility",
        _id: User._id,
      },
    ];

    console.log(data);

    data.forEach((item) => {
      axios
        .post(API_TRACK + "/expense", item)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  // sortByCategory = (category, contactInfo) => {
  //   // Set To Ascending
  //   if (this.state.ascendingSort || null) {
  //     this.setState({
  //       ascendingSort: false,
  //     });

  //     const ascendingWarehouses = this.state.warehouses;
  //     ascendingWarehouses.sort(sortAscending(category, contactInfo));

  //     this.setState({
  //       warehouses: ascendingWarehouses,
  //     });
  //   }
  //   // Set To Descending
  //   if (!this.state.ascendingSort) {
  //     this.setState({
  //       ascendingSort: true,
  //     });

  //     const descendingWareHouses = this.state.warehouses;
  //     descendingWareHouses.sort(sortDescending(category, contactInfo));

  //     this.setState({
  //       warehouses: descendingWareHouses,
  //     });
  //   }
  // };

  var userArrySize = Object.keys(User).length;

  if (userArrySize > 0) {
    return (
      <main className="track">
        <h1 className="track__title">add monthley expenses</h1>
        <form className="track__form" onSubmit={addExpense}>
          <input
            className="track__input"
            type="text"
            name="company"
            id="company"
            placeholder="Expense"
            onChange={(e) =>
              setNewExpense({ ...newExpense, name: e.target.value })
            }
          />
          <input
            className="track__input"
            type="text"
            name="price"
            id="price"
            placeholder="Price"
            onChange={(e) =>
              setNewExpense({ ...newExpense, price: e.target.value })
            }
          />
          <select
            className="track__input"
            name="selectList"
            id="selectList"
            value="Utility"
            onChange={(e) =>
              setNewExpense({ ...newExpense, type: e.target.value })
            }
          >
            <option value="Utility">Utility</option>
            <option value="Leisure">Leisure</option>
          </select>

          <button className="track__input">Add</button>
          <button className="track__testData" onClick={addDefaultData}>
            add Test Data
          </button>
        </form>

        <Expenses />
      </main>
    );
  } else {
    return <div>loading....</div>;
  }
}

export default TrackPage;
