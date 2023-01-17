const patientController = require('../controller/patientController');

const router = require('express').Router();

router.post('/insertPatient', patientController.insertPatient);
router.get('/getAllPatient', patientController.getAllPatients);
router.post('/:id', patientController.getSinglePatients);
router.put('/:id', patientController.updatePatients);
router.delete('/:id', patientController.deletePatients);
router.post('/published', patientController.getPublishedPatients);

module.exports = router;
