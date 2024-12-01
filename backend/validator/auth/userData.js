const db = require("../../db")
const userData = (req, res) => {
  const q = `SELECT * FROM users WHERE users.id = ?`;
  
    db.query(q, [req.query.postId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };
  module.exports = userData
  