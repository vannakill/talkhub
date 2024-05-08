const express = require("express");
const register = require('../validator/register')
const login = require('../validator/login')
const logout = require('../validator/logout')

const router = express.Router()

router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)
module.exports = router