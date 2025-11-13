const express = require('express');
const { askAI, promtpAI } = require('../controllers/ai.controller');
const prompts = require('../data/promptsData');

const router = express.Router();

router.post('/ask', askAI);


router.post('/run', promtpAI);


module.exports = router;
