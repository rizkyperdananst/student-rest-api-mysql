const express = require('express');
const router = express.Router();
const facultyController = require('../controllers/facultyController');

router.get('/api/faculty', facultyController.index);
router.post('/api/faculty', facultyController.store);
router.get('/api/faculty/:id', facultyController.show);
router.put('/api/faculty/:id', facultyController.update);
router.delete('/api/faculty/:id', facultyController.delete);

module.exports = router;