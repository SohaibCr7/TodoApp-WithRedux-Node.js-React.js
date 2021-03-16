import mongoose from "mongoose";

import { UserSchema } from "../models/userModel";

const User = mongoose.model("User", UserSchema);

const UserLogin = (req, res) => {

    User.findOne(
        { username: req.body.username },
        (error, doc) => {
            console.log("Name from font ", req.body.username, "pass from front ", req.body.password)
            if (doc) {
               
                if (doc.username === req.body.username && doc.password === req.body.password) {
                    res.json(doc)
                }
                else {
                   
                    var resBody = {
                        success:false,
                        message: "Invalid UserName and Password"
                    }
                    console.log(resBody)
                    res.send(resBody);
                }
            }
            else {
                var resBody = {
                    success:false,
                    message: "Invalid Username"
                }
                console.log(resBody)
                res.send(resBody);
            }
        }
    )

}

export default UserLogin;