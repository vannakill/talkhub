const db = require('../../db')
const jwt = require('jsonwebtoken')
 const userPost = (req,res) =>{
    
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");
  
    jwt.verify(token, "jwtkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");

    const q = "SELECT * FROM post WHERE post.userId = ? ORDER BY post.createdAt DESC"
    db.query(q, [userInfo.id], (error,data)=>{
        if(error) return res.send(error)
        return res.status(200).json(data)
    })
    })
}
module.exports = userPost