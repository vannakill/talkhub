const { text } = require("express")

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type: Number,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    userAvatar: String,
    passwordHash:{
        type:String
    }
}, {timestamps:true})

const Post = mongoose.model('User', userSchema)
module.exports = Post; 