import mongoose from "mongoose";
const emailSchema = new mongoose.Schema({
  Email: String,
  Subject: String,
  Content: String, 
  Date: Date
})
export const Email = mongoose.model('Email', emailSchema)

