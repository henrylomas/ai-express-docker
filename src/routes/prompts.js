const express = require('express');
const router = express.Router();

// En memoria (puedes reemplazar por base de datos o archivo JSON)
const prompts = require('../data/promptsData');

// GET /api/prompts  -> lista todos los prompts
router.get('/', (req, res) => {
  res.json(prompts);
});

// GET /api/prompts/:id -> obtiene un prompt por id
router.get('/:id', (req, res) => {
  const prompt = prompts.find(p => p.id === parseInt(req.params.id));
  if (!prompt) return res.status(404).json({ error: 'Prompt not found' });
  res.json(prompt);
});

// POST /api/prompts -> crea un nuevo prompt
router.post('/', (req, res) => {
  const { name, content } = req.body;
  if (!name || !content) return res.status(400).json({ error: 'name and content are required' });

  const id = prompts.length ? prompts[prompts.length - 1].id + 1 : 1;
  const newPrompt = { id, name, content };
  prompts.push(newPrompt);
  res.status(201).json(newPrompt);
});

// DELETE /api/prompts/:id -> elimina un prompt
router.delete('/:id', (req, res) => {
  const index = prompts.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Prompt not found' });

  const deleted = prompts.splice(index, 1);
  res.json({ deleted });
});

module.exports = router;
// export the data as named for other modules that want the raw array
module.exports.prompts = prompts;
