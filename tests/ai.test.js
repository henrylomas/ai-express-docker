const request = require('supertest');
const express = require('express');
const aiRoutes = require('../src/routes/ai.routes');

// Mock del servicio de OpenAI (para no hacer llamadas reales)
jest.mock('../src/services/openai.service', () => ({
  askModel: jest.fn(async (prompt) => `Mocked response for: ${prompt}`),
  askChat: jest.fn(async () => 'Mocked chat response'),
}));

const app = express();
app.use(express.json());
app.use('/api/ai', aiRoutes);

describe('AI Routes', () => {
  describe('POST /api/ai/ask', () => {
    it('should return a mocked AI response', async () => {
      const response = await request(app)
        .post('/api/ai/ask')
        .send({ prompt: 'Hello world' })
        .expect(200);

      expect(response.body.result).toContain('Mocked response');
    });

    it('should return 400 if no prompt provided', async () => {
      const response = await request(app)
        .post('/api/ai/ask')
        .send({})
        .expect(400);

      expect(response.body.error).toBe('prompt is required');
    });
  });
});
