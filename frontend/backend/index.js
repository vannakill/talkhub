const express = require("express");
const Postrouter = require("./routes/posts");
const AuthRouter = require("./routes/auth");
const UserRouter = require("./routes/users");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000
const app = express()
app.use(cors())
app.use(cookieParser())
app.use(express.json())
  
  app.get('/', function(req, res, next) {
    // Handle the get for this route
  });
  
  app.post('/auth/register', function(req, res, next) {
   // Handle the post for this route
  });
  app.post('/posts')
app.use("/api/posts", Postrouter)
app.use("/api/auth", AuthRouter)
app.use("/api/users", UserRouter)
app.listen(PORT,()=>{
    console.log('connected')
})


