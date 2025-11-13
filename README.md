# 🧠 AI Express API

A lightweight **Express.js API** containerized with **Docker**, designed to interact with the **OpenAI API** through clean, modular routes and controllers.  
It supports direct prompt execution and reusable, pre-defined prompts for various AI tasks (summarization, explanation, translation, etc).

---

## 🚀 Features

- Modular structure using **CommonJS**.
- **Dockerized** for isolated and portable environments.
- Built-in support for **OpenAI Chat Completions** (`gpt-4o-mini` by default).
- Includes **two AI endpoints**:
  - `POST /api/ai/ask` → Sends raw user prompts directly to the model.
  - `POST /api/ai/prompt` → Uses pre-defined prompts for specific tasks.
- Mock-friendly service layer (`openai.service.js`) for local/offline testing.
- Ready for extension (database integration, frontend connection, etc).

---

## 🧩 Project Structure

