const Appointment = require("../models/Appointment");

const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

const generateAppointmentNumber = ()=>{
    const datePart = Date.now().toString().slice(-6);
    const randomPart = Math.floor(100 +Math.random()*900);
    return `APT-${datePart}-${randomPart}`;
};

const getDayName = (date)=>{
    return new Intl.DateTimeFormat("en-US",{
        weekday:"long"
    }).format(date);
};

const normalizeDate=(datevalue)=>{
    const date = new Date(datevalue);
    date.setHours(0,0,0,0);
    return date;
};