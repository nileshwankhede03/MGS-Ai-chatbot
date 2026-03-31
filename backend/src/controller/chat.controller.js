const axios = require('axios');

/**
 * @route POST /api/chat
 * @desc Handle chat messages and get responses from GEMINI API
 * @access Public
 */

async function chatController(req, res) {
  const { message } = req.body;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: message }],
          },
        ],
      },
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No reply';

    res.json({ reply });
  } catch (error) {
    console.log('ERROR:', error.response?.data || error.message);
    res.status(500).json({ error: 'Gemini API failed' });
  }
}

module.exports = { chatController };
