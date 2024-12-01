const jwt = require('jsonwebtoken')
const db = require('../../db')
const deletePost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const q = "DELETE FROM users WHERE `id` = ?";
  
      db.query(q, [userInfo.id], (err, data) => {
        if (err) return res.status(403).json("You can delete only your profile!");
  
        return res.json("user has been deleted!");
      });
    });
  };
  module.exports = deletePost