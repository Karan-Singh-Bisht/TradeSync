const express = require("express");
const { Signup, Login } = require("../controllers/Auth.controller");
const router = express.Router();

router.post("/signUp", Signup);
router.post("/login", Login);

module.exports = router;
