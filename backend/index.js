const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const multer = require('multer')
const Postrouter = require("./routes/posts");
const AuthRouter = require("./routes/auth");
const UserRouter = require("./routes/users");
const commentRoutes = require("./routes/comments");

const PORT = process.env.PORT || 3000
const app = express()
var options = {
  origin: 'http://localhost:3000',
  credentials: true };

app.use(cors(options))
app.use(cookieParser())
app.use(express.json())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/img");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.post('/posts')
app.use("/api/posts", Postrouter)
app.use("/api/auth", AuthRouter)
app.use("/api/users", UserRouter)
app.use("/api/comments", commentRoutes);
app.listen(PORT,()=>{
    console.log('connected')
})


