import mongoose from "mongoose";
import { UserSchema } from "../models/userModel";

    const User = mongoose.model("User", UserSchema);

export const addNewUser = (req, res) => {
  let newUser = new User(req.body);

  newUser.save((error, User) => {
    if (error) {
      res.send(error);
    }
    res.json(User);
  });
};

export const getUser = (req, res) => {
  User.find({}, (error, User) => {
    if (error) {
      res.send(error);
    }
    res.json(User);
  });
};

export const getUserById = (req, res) => {
  
  try {
    User.findOneAndUpdate(
      { email: req.body.email },
      { password: req.body.password },
      { new: true },
      (err, doc) => {
        if (err) 
        {
          res.status(500).json(err);
          throw err;
        } 
        else 
        {
          res.json(doc);
        }
      }
    );
  } catch (error) {
    console.log("inside catch", error);
  }
};
