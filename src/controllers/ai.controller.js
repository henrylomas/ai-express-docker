const { askModel, askChat } = require('../services/openai.service');
const prompts = require('../data/promptsData');

const askAI = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'prompt is required' });
    }

    const result = await askModel(prompt);

    res.json({ result });
  } catch (err) {
    console.error('AI Error:', err.message);
    res.status(500).json({ error: 'AI request failed' });
  }
};

const promtpAI = async (req, res) => {
  try {
    const { userInput, promptInput } = req.body;
    const prompt = prompts.find(p => p.name === promptInput);
    if (!prompt) {
      return res.status(404).json({ error: 'Prompt not found' });
    }
    // Use the centralized service which handles mock behavior and errors
    const messages = [
      { role: 'system', content: prompt.content },
      { role: 'user', content: userInput }
    ];
    const content = await askChat(messages, 'gpt-4o-mini');
    res.json({ result: content });
  } catch (err) {
    console.error('AI Error:', err.message);
    res.status(500).json({ error: 'AI request failed' });
  }
};
module.exports = { askAI , promtpAI };
