const express = require("express");
const router = express.Router();
const {checkUsername,addUsername,deleteUsername} = require("../Controller/usernameController");
const {checkEmail,addEmail,deleteEmail} = require("../Controller/emailController");

router.route("/checkusername/:username")
    .get(checkUsername);

router.route("/addusername")
    .post(addUsername);

router.route("/deleteusername/:username")
    .delete(deleteUsername);

router.route("/checkemail/:email")
    .get(checkEmail);

router.route("/addemail")
    .post(addEmail);

router.route("/deleteemail/:email")
    .delete(deleteEmail);



module.exports = router;