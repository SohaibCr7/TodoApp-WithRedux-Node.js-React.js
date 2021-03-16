import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    username:{
        type: String,
        unique:true,
        required: true
    },
    email:{
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    created_date:{
        type: Date,
        default: Date.now
    }
})