const db = require("../../db.js")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const register = (req,res)=>{
   
        const q = "SELECT * FROM users WHERE email = ? OR username = ?";
      
        db.query(q, [req.body.email, req.body.username], (err, data) => {
          if (err) return res.status(500).json(err);
          if (data.length) return res.status(409).json("Пользователь уже существует!");
          if(!req.body.username.trim()) return res.status(400).json("Неверные данные")
          if(req.body.password.trim().length < 8) return res.status(400).json("Пароль должен быть не короче 8 символов.") 
          
          //Hash the password and create a user
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(req.body.password, salt);
          
          const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
          const values = [req.body.username, req.body.email, hash];
      
          db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("Пользователь создан.");
          });
        });
      };
    
module.exports = register
