const express = require("express");
const { route } = require("./doctorRoutes");
const { getSinglePatient, getPatientAppointments, getPatient } = require("../controllers/patientController");
const Appointment = require("../models/Appointment");

const router =  express.Router();

router.get("/",getPatient);
router.get("/:id",getSinglePatient);
router.get("/:id/apppointments",getPatientAppointments);

module.exports = router;