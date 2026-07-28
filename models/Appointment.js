const  mongoose = require("mongoose");
const { type } = require("node:os");
const { ref } = require("node:process");
const { stringify } = require("node:querystring");

const appointmentSchema = new mongoose.Schema(
    {
     appointmentNumber:{
        type:String,
        unique:true,
        required:true

     },
     doctor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor"
     },
     patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"patient",
        required:true
     },
     appointmentDate:{
        type:Date,
        required:true
     },
     appointmentTime:{
        type:String,
        required:true
     },
     reason:{
        type:String,
        required:true,
        trim:true
     },
     symptoms:{
        type:String,
        trim:true
     },
     status:{
        type:String,
        erum:["Pending","Confirmed","checked-in","completed","Cancelled"]
     },
     bookingType:{
        type:String,
        erum:["Online","Walk-in","Phone"],
        default:"Online"
     },
     payment:{
        type:String,
        erum:["Pending ","paid","Refunded"],
        default:"Pending"
     },
     consultationFee:{
        type:Number,
        required:true
     },
     tokenNumber:{
        type:Number
     },
     notes:{
        type:String,
        trim:true
     }
},{
    timestamps:true
});

appointmentSchema.index({
   doctor:1,
   appointmentDate:1,
   appointmentTime:1
},{
   unique:true,
   partialFilterExpression:{
      status:{
         $nin:["Cancelled"]
      }
   }
});

module.exports = mongoose.model("Appointment",appointmentSchema);