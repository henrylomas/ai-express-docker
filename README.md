Perfecto 💪 — empecemos en orden:
1️⃣ Te dejo el **archivo `README.md` final** (formato listo para colocar en el repo).
2️⃣ Luego, pasamos a la parte de **tests unitarios** con Jest para las rutas `/api/ai/ask` y `/api/ai/prompt`.

---

## ✅ Aquí tienes el `README.md` completo:

```markdown
# 🧠 AI Express API

A simple and modular **Express.js API**, fully containerized with **Docker**, built to interact with the **OpenAI API** for generating and processing text using predefined or dynamic prompts.

---

## 🚀 Features

- Built with **Node.js + Express** (CommonJS modules)
- **Dockerized** for easy setup and portability
- **OpenAI API** integration for prompt-based and free-text interactions
- **REST endpoints** for AI queries and prompt management
- Simple, extensible architecture suitable for learning or rapid prototyping

---

## 🧩 Project Structure

```

📦 ai-express-api\
├── controllers/\
│   └── ai.controller.js\
├── services/\
│   └── openai.service.js\
├── routes/\
│   ├── ai.js\
│   └── prompts.js\
├── data/\
│   └── promptsData.js\
├── index.js\
├── Dockerfile\
├── docker-compose.yml\
├── package.json\
└── .env

````

---

## ⚙️ Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/ai-express-api.git
cd ai-express-api
````

### 2️⃣ Create your `.env` file

```bash
OPENAI_API_KEY=your_openai_api_key_here
PORT=3000
```

### 3️⃣ Run with Docker

```bash
docker-compose up --build
```

> API available at:
> 🔗 `http://localhost:3000`

---

## 🧠 API Endpoints

### 🔹 `POST /api/ai/ask`

Sends a direct prompt to the AI model.

**Request:**

```json
{
  "prompt": "Explain what async/await means in JavaScript."
}
```

**Response:**

```json
{
  "result": "Async/await allows you to write asynchronous code that looks synchronous..."
}
```

---

### 🔹 `POST /api/ai/prompt`

Uses a predefined prompt (from `promptsData.js`) combined with user input.

**Request:**

```json
{
  "promptInput": "SummarizeText",
  "userInput": "Artificial Intelligence is transforming industries..."
}
```

**Response:**

```json
{
  "result": "AI is changing many industries by automating and optimizing tasks..."
}
```

---

## 💾 Predefined Prompts

Defined in `data/promptsData.js`:

```js
[
  { id: 1, name: "ExplainAsyncAwait", content: "Explain async/await in simple terms with code examples." },
  { id: 2, name: "SummarizeText", content: "Summarize the following text clearly and concisely." }
]
```

---

## 🧪 Local Development

Run the API directly (without Docker):

```bash
npm install
npm run dev
```

Then access it at:

```
http://localhost:3000
```

---

## 🧩 Example cURL Commands

**Direct prompt:**

```bash
curl -X POST http://localhost:3000/api/ai/ask \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Write a haiku about Docker containers"}'
```

**Predefined prompt:**

```bash
curl -X POST http://localhost:3000/api/ai/prompt \
  -H "Content-Type: application/json" \
  -d '{"promptInput": "ExplainAsyncAwait", "userInput": "Make it simple"}'
```

---

## 🧱 Test Setup (Jest)

We use **Jest** for unit testing:

* Mocked OpenAI responses (no real API calls)
* Covers `/api/ai/ask` and `/api/ai/prompt`
* Includes tests for error handling and validation

Run tests:

```bash
npm test
```

---

## 🧭 Future Enhancements

* 🧩 Add authentication (API keys / JWT)
* 💾 Store prompts in a database
* ⚡ Add streaming responses for chat
* 🧠 Integrate with AWS Lambda or ECS

---

## 👨‍💻 Author

**Henry Lomas**
Backend & Cloud Engineer | Node.js | Python | AWS
📧 [henry.lomas.a@gmail.com](mailto:henry.lomas.a@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/henry-antonio-lomas-ascencio/)

> “Simple, modular, and ready to scale.”

