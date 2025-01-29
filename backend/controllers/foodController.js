import { log } from "console";
import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item
const addFood = async (req, res) => {
  console.log("Request Body:", req.body); // Log the request body to check if all fields are received
  console.log("Request File:", req.file); // Log the file to check if the image is received

  // Trim any spaces in the keys of req.body
  const body = Object.fromEntries(
    Object.entries(req.body).map(([key, value]) => [key.trim(), value])
  );

  // Check if the file is uploaded
  let image_filename = req.file ? req.file.filename : null;

  // Ensure all required fields are present
  if (!body.description || !body.price || !body.category || !image_filename) {
    return res.status(400).json({
      success: false,
      message:
        "All fields (description, price, category, and image) are required.",
    });
  }

  // Create a new food document
  const food = new foodModel({
    name: body.name,
    description: body.description,
    price: body.price,
    category: body.category,
    image: image_filename,
  });

  try {
    // Save the food item to the database
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    // If any error occurs, log it and send a response
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove food item

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addFood, listFood, removeFood };
