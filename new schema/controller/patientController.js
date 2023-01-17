const { patientDetails } = require('../models');
const db = require('../models');

const PatientDetails = db.patientDetails;
const User = db.user;

//1. create patients

const insertPatient = async (req, res) => {
    let info = {
        patientName: req.body.patientName,
        patientEmail: req.body.patientEmail,
        patientProblem: req.body.patientProblem,
        patientMobile: req.body.patientMobile,
        patientAddress: req.body.patientAddress,
    };
    const patients = await PatientDetails.create(info);
    res.status(200).send(patients);

    console.log(patients);
};

// 2. get all patients details

const getAllPatients = async (req, res) => {
    let patients = await patientDetails.findAll({});
    res.status(200).send(patients);
};

// 3. get single patients details

const getSinglePatients = async (req, res) => {
    let id = req.params.id;
    let patients = await patientDetails.findOne({ where: { id: id } });
    res.status(200).send(patients);
};
// 4.UPDATE patients details

const updatePatients = async (req, res) => {
    let id = req.params.id;

    const patients = await patientDetails.update(req, body, {
        where: { id: id },
    });

    res.status(200).send(patients);
};
// 5.DELETE patients details

const deletePatients = async (req, res) => {
    let id = req.params.id;

    await patientDetails.destroy({
        where: { id: id },
    });

    res.status(200).send('patient data is deleted');
};
// 6.GET PUBLISHED patients details

const getPublishedPatients = async (req, res) => {
    const patients = await patientDetails.findAll({
        where: { published: true },
    });
    res.status(200).send(patients);
};

module.exports = {
    insertPatient,
    getAllPatients,
    getSinglePatients,
    updatePatients,
    deletePatients,
    getPublishedPatients,
};
