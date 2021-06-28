const express = require("express");
const mdRouter = express.Router();
const multer = require("multer");
const upload = multer();
const {createMd,findMd,findAllMds,searchMdByTitle,searchMdByTopic,deleteMd,addComment} = require("../Controller/mdController");
const {verifyToken} = require("../Configurations/verifyToken");


mdRouter.route("/find/:id")
    .get(findMd);
mdRouter.route("/findall")
    .get(findAllMds);



mdRouter.route("/save")
    .post(upload.none(),createMd);
mdRouter.route("/search/:keyword")
    .post(searchMdByTitle);
mdRouter.route("/comment/addcomment/:id")
    .post(addComment);


mdRouter.route("/search/:topic")
    .get(searchMdByTopic);
mdRouter.route("/delete/:id")
    .delete(deleteMd);


module.exports = mdRouter;