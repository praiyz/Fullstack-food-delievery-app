import mongoose, { connect } from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect(
     "mongodb+srv://praiyz:1234@cluster0.rz8ir.mongodb.net/fullstack-food-delievery-app").then(() =>console.log("DB connected")
    );
}