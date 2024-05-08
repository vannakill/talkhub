const express = require("express");
const getPost = require('../validator/post.js')
const addPost = require("../validator/addPost.js");
const getPosts = require("../validator/getPosts.js");
const router = express.Router()
router.get("/", getPost)
router.get("/:id",getPosts)
router.post("/", addPost);

/*router.delete("/:id",addPost.deletePost)
router.put("/:id",addPost.updatePost)*/
module.exports = router