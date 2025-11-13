const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const askModel = async (prompt) => {
  if (!OPENAI_API_KEY) {
    return `MOCK: received prompt -> ${prompt}`;
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (err) {
    console.error('OpenAI API error:', err.message);
    // If rate limited, fallback to a mock response so endpoints remain usable
    if (err && err.response && err.response.status === 429) {
      return `MOCK-FALLBACK: rate limit for prompt -> ${prompt}`;
    }
    throw err;
  }
};

// askChat: wrapper to call the Chat Completions endpoint with messages array
const askChat = async (messages, model = 'gpt-3.5-turbo') => {
  if (!OPENAI_API_KEY) {
    // return a basic mock that echoes the last user message
    const lastUser = Array.isArray(messages) && messages.length
      ? messages.filter(m => m.role === 'user').pop()?.content || ''
      : '';
    return `MOCK: system+user -> ${lastUser}`;
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model,
        messages,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (err) {
    console.error('OpenAI API error:', err.message);
    // If rate limited, return a mock fallback so handlers can still respond
    if (err && err.response && err.response.status === 429) {
      const lastUser = Array.isArray(messages) && messages.length
        ? messages.filter(m => m.role === 'user').pop()?.content || ''
        : '';
      return `MOCK-FALLBACK: rate limit for user -> ${lastUser}`;
    }
    throw err;
  }
};

module.exports = { askModel, askChat };
