const express = require("express");
const router = express.Router();
const {createMd} = require("../Controller/MdController");

router.route("/md/save")
    .post(createMd);

module.exports = router;