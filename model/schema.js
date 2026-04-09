const mongoose = require('mongoose')
// import mongoose from "mongoose";
const emailSchema = new mongoose.Schema({
  account: {type: String},
  subject: {type: String},
  content: {type: String}, 
  date: {type: Date},
  slug: {type: String}

})
const Email = mongoose.model('Email', emailSchema)
module.exports = Email
