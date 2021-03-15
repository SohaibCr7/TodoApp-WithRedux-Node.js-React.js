import mongoose from "mongoose";

import { UserSchema } from "../models/userModel";

const User = mongoose.model("User", UserSchema);

export default UserLogin = (req,res) =>{

    User.findOne(
        {username: req.body.username},
        (error,doc) => {
            if(doc !== undefined){
                if(doc.password === req.body.password){
                    res.status(200).json(doc)
                }else{
                    res.status(400).json(" Incorrect password")
                    throw error;
                }
            }
            else{
                doc.password
            }
        }
    )

}