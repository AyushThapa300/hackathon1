const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');

router.post('/', candidateController.addCandidate);
router.get('/', candidateController.getAllCandidates);
module.exports = router;