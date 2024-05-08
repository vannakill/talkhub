const express = require("express");
const db = require('../db')
const addPost = (req,res) =>{
    
}
 const getPost = (req,res) =>{
    const q = "SELECT * FROM post"
    db.query(q, (error,data)=>{
        if(error) return res.send(error)
        return res.status(200).json(data)
    })
}
 const updatePost = (req,res) =>{
    
}
 const deletePost = (req,res) =>{
    
}
 const getPosts = (req,res) =>{
        const q =
          "SELECT `Id` `username`, `Title`, `desc`, `createdat` FROM users JOIN post ON users.id = post.userId WHERE post.id =? ";
      
        db.query(q, [req.params.id], (err, data) => {
          if (err) return res.status(500).json(err);
      
          return res.status(200).json(data[0]);
        });
      };
    
module.exports = getPost
//module.exports = getPosts