const express = require("express");
const register = require('../validator/auth/register')
const login = require('../validator/auth/login')
const userData = require('../validator/auth/userData')
const logout = require('../validator/auth/logout')
const userDelete = require('../validator/auth/userDelete')

const router = express.Router()

router.post("/register",register)
router.post("/login",login)
router.post("/login/:id",userData)
router.post("/logout",logout)
router.delete('/login/:id',userDelete)
module.exports = router