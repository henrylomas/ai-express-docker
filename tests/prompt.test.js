const request = require('supertest');
const express = require('express');
const aiRoutes = require('../src/routes/ai.routes');
const prompts = require('../src/data/promptsData');

jest.mock('../src/services/openai.service', () => ({
  askChat: jest.fn(async () => 'Mocked chat response'),
  askModel: jest.fn(),
}));

const app = express();
app.use(express.json());
app.use('/api/ai', aiRoutes);

describe('POST /api/ai/prompt', () => {
  it('should return mocked response when prompt exists', async () => {
    const response = await request(app)
      .post('/api/ai/prompt')
      .send({
        promptInput: prompts[0].name,
        userInput: 'Explain it simply',
      })
      .expect(200);

    expect(response.body.result).toBe('Mocked chat response');
  });

  it('should return 404 for invalid prompt name', async () => {
    const response = await request(app)
      .post('/api/ai/prompt')
      .send({
        promptInput: 'InvalidPrompt',
        userInput: 'Hello',
      })
      .expect(404);

    expect(response.body.error).toBe('Prompt not found');
  });
});
