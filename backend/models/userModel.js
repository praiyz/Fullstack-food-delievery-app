import mongoose from "mongoose"; // Importing the mongoose library

// Defining the user schema with fields and their constraints
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // User's name, required field
    email: { type: String, required: true, unique: true }, // User's email, required and must be unique
    password: { type: String, required: true }, // User's password, required field
    cartData: { type: Object, default: {} }, // User's cart data, defaults to an empty object
  },
  { minimize: false }
); // Prevents Mongoose from removing empty objects

// Creating the user model or reusing the existing one if it already exists
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

// Exporting the user model as the default export
export default userModel;
