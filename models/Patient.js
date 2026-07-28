const { Timestamp } = require("bson");
const { mongo } = require("mongoose");
const { type } = require("node:os");

const mongoose = required ("mongoose");

const patientSchema = new mongoose.Schema({
    name :{
        type:String,
        required:[true, "patients name is required"],
        trim :true
    },
    phone :{
        type:String,
        required:[true,"Phine number is required"],
        trim:true,
        index:true
    },
     email:{
        type :String,
        lowercase:true,
        trim:true
     },
     age:{
        type:Number,
        required:true,
        min :0,
        max:120

     },
     gender:{
        type:String,
        erum:[
            "male","Female","Other"
        ],
        required:true
     },
     address:{
        type:String,
        trim: true
     },
     totalvisit:{
        type:Number,
        default:0
     },
     lastvisit:{
        type : Date
     }
},{
    Timestamp:true
});

module.exports= mongoose.module("patient",patientSchema);