const express = require("express");
const mdRouter = express.Router();
const multer = require("multer");
const upload = multer();
const {createMd,findMd,findAllMds} = require("../Controller/MdController");

mdRouter.route("/save")
    .post(upload.none(),createMd);

mdRouter.route("/find/:id")
    .get(findMd);

mdRouter.route("/findall")
    .get(findAllMds);

module.exports = mdRouter;