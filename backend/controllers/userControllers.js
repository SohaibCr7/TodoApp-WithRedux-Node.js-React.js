import mongoose from "mongoose";
import {UserSchema} from "../models/userModel";

const User = mongoose.model('User', UserSchema);

export const addNewUser = (req,res) => {
    let newUser = new User(req.body);

    newUser.save((error, User) => {
        if(error){
            res.send(error);
        }
        res.json(User);
    });
};

export const getUser = (req,res) =>{

    User.find({},(error,User)=>{
        if(error){
            res.send(error)
        }
        res.json(User);
    });
};

export const getUserById = (req,res) => {

    User.findById(req.params.UserId,(error,User) =>{
        if(error){
            res.send(error)
        }
        res.json(User)
    })
}