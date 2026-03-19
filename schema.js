import mongoose from "mongoose";
const emailSchema = new mongoose.Schema({
  email: String,
  subject: String,
  content: String, 
  date: Date
})
export const Email = mongoose.model('Email', emailSchema)

