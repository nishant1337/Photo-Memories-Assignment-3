const express = require("express");
const { authUser } = require("../controllers/authController");
const { registerUser } = require("../controllers/userControllers");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);


module.exports = router;
