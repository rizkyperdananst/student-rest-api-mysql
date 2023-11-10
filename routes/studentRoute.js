const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/api/student', studentController.index);
router.get('/api/student/:id', studentController.show);
router.post('/api/student', studentController.store);
router.put('/api/student/:id', studentController.update);
router.delete('/api/student/:id', studentController.delete);

module.exports = router;