const express = require("express");
const router = express.Router();
const {createUser , userLogin}  = require("../Controller/userController");

router.route("/createuser")
    .post(createUser);
router.route("/login")
    .post(userLogin);

module.exports = router;