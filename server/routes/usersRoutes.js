const express = require("express");
const router = express.Router();

const controller = require("../controllers/usersController");

router.post("/signup", controller.createUser);
router.post("/login", controller.loginUser);
router.get("/currentuser", controller.getCurrentUser);

module.exports = router;
