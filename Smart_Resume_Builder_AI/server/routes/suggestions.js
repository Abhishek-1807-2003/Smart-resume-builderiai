
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  const { resumeData } = req.body;
  try {
    // Mock AI Suggestion (replace with actual API key if available)
    const suggestions = `Consider adding more specific achievements to: ${resumeData.substring(0, 50)}...`;
    res.json({ suggestions });
  } catch (error) {
    res.status(500).json({ error: 'AI service failed.' });
  }
});

module.exports = router;
