import mongoose from "mongoose";
import { UserSchema } from "../models/userModel";

const User = mongoose.model("User", UserSchema);

export const addNewUser = (req, res) => {
  let newUser = new User(req.body);

  newUser.save((error, User) => {

    if (error) {
      console.log("sssss")
      res.status(500).json(error);
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
   console.log( req.body.username)
  try {
    User.findOneAndUpdate(
      { username: req.body.username },
      { password: req.body.password },
      { new: true },
      (err, doc) => {
        if (err) {
          res.status(500).json(err);
          throw err;
        }
        else {
          res.json(doc);
        }
      }
    );
  } catch (error) {
    console.log("inside catch", error);
  }
};
