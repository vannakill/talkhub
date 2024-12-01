const express = require("express")
const addComment = require("../validator/comments/AddComment")
const getComments = require('../validator/comments/getComment')
const deleteComment = require('../validator/comments/deleteComment')
//const userComment = require('../validator/comments/userComment')
const router = express.Router();

router.get("/", getComments);
//router.get("/", userComments)
router.post("/", addComment);
router.delete("/delete/:id", deleteComment);

module.exports = router
