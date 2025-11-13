const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const aiRouter = require('./src/routes/ai.routes');
const promptRouter = require('./src/routes/prompts');

app.use("/api/ai", aiRouter);
app.use('/api/prompts', promptRouter);
// 


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
