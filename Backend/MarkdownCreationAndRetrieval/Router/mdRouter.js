const express = require("express");
const mdRouter = express.Router();
const multer = require("multer");
const upload = multer();
const {createMd,findMd,findAllMds,searchMdByTitle,searchMdByTopic,deleteMd} = require("../Controller/mdController");
const {verifyToken} = require("../Configurations/verifyToken");

mdRouter.route("/save")
    .post(upload.none(),createMd);

mdRouter.route("/find/:id")
    .get(findMd);

mdRouter.route("/findall")
    .get(findAllMds);

mdRouter.route("/search/:keyword")
    .post(searchMdByTitle);

mdRouter.route("/search/:topic")
    .get(searchMdByTopic);
mdRouter.route("/delete/:id")
    .delete(deleteMd);


module.exports = mdRouter;