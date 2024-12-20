const db = require("../../db.js")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const login = (req,res)=>{
const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("Пользователь не найден");

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Неверное имя пользователя или пароль");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite:'none',
        secure:true 
      })
      .status(200)
      .json(other);
  });
};

  module.exports = login
  
