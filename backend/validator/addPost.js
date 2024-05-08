const express = require('express')
const jwt = require('jsonwebtoken');
const db = require('../db');

const addPost = (req, res) => {
  console.log(req.cookies)
      const q =
        "INSERT INTO post(`Title`, `desc`, `userId`, `createdat`) VALUES (?)";
  
      const values = [
        req.body.Title,
        req.body.desc,
        req.body.userId,
        req.body.createdat
      ];
      
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data) 
      });
    }
  
  module.exports = addPost