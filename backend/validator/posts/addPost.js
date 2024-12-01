const express = require('express')
const jwt = require('jsonwebtoken');
const db = require('../../db');

const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
      const q =
        "INSERT INTO post(`Title`, `desc`, `userId`, `img`, `createdat`) VALUES (?)";
  
      const values = [
        req.body.Title,
        req.body.desc,
        userInfo.id,
        req.body.img,
        req.body.createdat,
      ];
      if(!req.body.Title.trim()) return res.status(400).json("Введите заголовок")
      
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data) 
      });
    })}

  module.exports = addPost