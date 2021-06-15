const express = require("express");
const router = express.Router();
const {createUser , fetchAllUsers , userLogin , checkingForUsername}  = require("../Controller/userController");


router.route("/usernamecheck/:username")
    .get(checkingForUsername)

router.route("/createuser")
    .post(createUser);
router.route("/login")
    .post(userLogin);
router.route("/fetch")
    .get(fetchAllUsers);

module.exports = router;