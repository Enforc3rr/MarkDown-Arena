const express = require("express");
const router = express.Router();
const {createUser , fetchAllUsers , userLogin }  = require("../Controller/userController");


router.route("/createuser")
    .post(createUser);
router.route("/login")
    .post(userLogin);
router.route("/fetch")
    .get(fetchAllUsers);

module.exports = router;