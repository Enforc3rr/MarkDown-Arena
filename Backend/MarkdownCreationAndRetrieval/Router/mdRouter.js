const express = require("express");
const mdRouter = express.Router();
const multer = require("multer");
const upload = multer();
const {createMd,findMd} = require("../Controller/MdController");

mdRouter.route("/save")
    .post(upload.none(),createMd);

mdRouter.route("/find/:_id")
    .get(findMd);

module.exports = mdRouter;