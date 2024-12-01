const express = require("express");
const getPost = require('../validator/posts/post.js')
const addPost = require("../validator/posts/addPost.js");
const getPosts = require("../validator/posts/getPosts.js");
const deletePost = require('../validator/posts/deletePost.js')
const userPost = require('../validator/posts/userPost.js')
const router = express.Router()
router.get("/", getPost)
router.get("/profile/:id", userPost)
router.get("/:id",getPosts)
router.post("/", addPost);
router.delete("/:id", deletePost);

/*router.delete("/:id",addPost.deletePost) 
router.put("/:id",addPost.updatePost)*/
module.exports = router