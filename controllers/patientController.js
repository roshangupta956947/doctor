const Patient = require("../models/Patient");

const getPatient = async (req, res, next) => {
    try {
        const { search } = req.query;
        const filter = {};

        if (search) {
            filter.$or = [
                {
                    name: {
                        $regex: search,
                        $options: "i",
                    },
                },
                {
                    phone: {
                        $regex: search,
                        $options: "i",
                    },
                },
            ];
        }

        const patient = await Patient.find(filter).sort({ createdAt: -1 });

        res.json({
            success: true,
            count: patient.length,
            data: patient,
        });
    } catch (error) {
        next(error);
    }
};


const Patient = require("../models/Patient");

const getPatient = async (req, res, next) => {
    try {
        const { search } = req.query;
        const filter = {};

        if (search) {
            filter.$or = [
                {
                    name: {
                        $regex: search,
                        $options: "i",
                    },
                },
                {
                    phone: {
                        $regex: search,
                        $options: "i",
                    },
                },
            ];
        }

        const patients = await Patient.find(filter).sort({ createdAt: -1 });

        res.json({
            success: true,
            count: patients.length,
            data: patients,
        });
    } catch (error) {
        next(error);
    }
};



const getSinglePatient = async(req,res,next)=>{
    try {
        const {id} = req.params;
        
    } catch (error) {
        next(error);
    }
}

