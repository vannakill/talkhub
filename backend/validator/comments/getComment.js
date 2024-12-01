const db = require("../../db")
const express = require('express')
const getComments = (req, res) => {
  const q = `SELECT c.*, u.id AS userId, username FROM comments AS c JOIN users AS u ON (u.id = c.userId) WHERE c.postId = ? ORDER BY c.createdAt DESC`;
  
    db.query(q, [req.query.postId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };
  module.exports = getComments