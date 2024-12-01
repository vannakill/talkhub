const db = require('../../db')
 const getPost = (req,res) =>{
    const q = "SELECT * FROM post ORDER BY post.createdAt DESC"
    db.query(q, (error,data)=>{
        if(error) return res.send(error)
        return res.status(200).json(data)
    })
}
module.exports = getPost
