const axios = require('axios');

/**
 * @route POST /api/chat
 * @desc Handle chat messages and get responses from GEMINI API
 * @access Public
 */

async function chatController(req, res) {
  const { message } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({
      error: 'Message is required',
    });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({
      error: 'API key not configured',
    });
  }

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
      {
        timeout: 10000,
      },
    );

    const reply =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      'No response from MGS AI';

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('AI API Error:', error.response?.status || error.message);

    return res.status(error.response?.status || 500).json({
      error: 'MGS AI service unavailable. Please try again later.',
      code: error.response?.status || 500,
    });
  }
}

module.exports = { chatController };
