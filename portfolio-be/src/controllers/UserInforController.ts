import mongoose from "mongoose";
import User from '../models/User'
// create new cause
export function createCourse (req, res) {
    const user = new User({
      _id:  new mongoose.Types.ObjectId()._id,
      title: req.body.title,
      name: req.body.name,
    });
    console.log(user,"user");
    
    return user
      .save()
      .then((newCourse) => {
        return res.status(201).json({
          success: true,
          message: 'New cause created successfully',
          Course: newCourse,
        });
      })
      .catch((error) => {
          console.log(error);
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: error.message,
        });
      });
  }