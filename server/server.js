const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5005;

const usersRoutes = require("./routes/usersRoutes.js");
const expenseRoutes = require("./routes/expenseRoutes.js");

app.use("/users", usersRoutes);
app.use("/track", expenseRoutes);

app.get("/", (req, res) => {
  res.send("welcome to track");
});

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
  )
  .catch((error) => console.log(`${error} -  did not connect`));
