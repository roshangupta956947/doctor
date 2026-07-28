const mongoose = require("mongoose");
const { kStringMaxLength } = require("node:buffer");

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Doctor name is required"],
        trim: true
    },
    specialization: {
        type: String,
        required: [true, "Specialization is required"],
        trim: true
    },
    qualification: {
        type: String,
        required: [true, " qualification is requireaasds"],
        trim: true

    },
    experiance: {
        type: Number,
        default: 0,
        min: 0
    },

    cunsultation: {
        type: number,
        required: true,
        min: 0
    },
    phone :{
        type : number ,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type: String,
        unique:true,
        sparse:true,
        lowercase:true,
        trim:true
    },
    availableDays:[{
        type : String,
        erum:[
            "monday", " tuesday", "wednseday", 
            "thursday", " friday", "Saturday", " sunday"
        ]
    }],
    startTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    },
    slotduration:{
        type:Number,
        trim:true
    },
    roomnumber:{
        type:String,
        trim:true
    },
    isActive:{
        type:Boolean,
        default:true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Doctor", doctorSchema);