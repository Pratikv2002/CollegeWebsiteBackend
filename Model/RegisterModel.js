const mongoose = require('mongoose');
const validator = require('validator');

const RegisterSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
           if(!validator.isEmail(value)){
            throw new Error("Invalid email...")
           }
        }
    },
    Password:{
        type:String,
        required:true
    },
    Admin: {
        type: Boolean,
        default:false
    }, AdminType: {
        type: String,
        default:"none"
    },Date:{
        type :Date,
        default: new Date()
    }

})

const RegisterModel =  mongoose.model("Admin",RegisterSchema)

module.exports = RegisterModel;
