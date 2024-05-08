const db = require('../db')
const getPosts = (req,res) =>{
    const q = "SELECT p.id, `username`, `Title`, `desc`, `createdat` FROM users u JOIN post p ON u.id = p.userId WHERE p.id =? ";
  
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data);
    });
  };
  module.exports = getPosts