import mongoose from "mongoose";
const emailSchema = new mongoose.Schema({
  subject: String,
  email: String,
  content: String, 
  date: Boolean
})
export const email = mongoose.model('Email', emailSchema)