const mongoose = require('mongoose');
const emailSchema = new mongoose.Schema({
  account: String,
  subject: String,
  content: String, 
  date: Date
})
export const Email = mongoose.model('Email', emailSchema)

