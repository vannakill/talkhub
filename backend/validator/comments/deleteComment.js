    const jwt = require('jsonwebtoken')
    const db = require('../../db')
    const deleteComment = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const commentId = req.params.id;
      const q = "DELETE FROM comments WHERE `id` = ?";
  
      db.query(q, [commentId], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("Comment has been deleted!");
        return res.status(403).json("You can delete only your comment!");
      });
    });
  };
  module.exports = deleteComment