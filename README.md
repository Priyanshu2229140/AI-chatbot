# AI Chatbot

This is a React-based web application that allows users to send prompts to a Gemini AI API and receive markdown-formatted responses. It renders AI-generated content—including code blocks—with clean styling, making it ideal for displaying technical answers in a readable format.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Details](#api-details)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Send prompts to Gemini AI API
- Receive markdown-formatted responses
- Renders code blocks with clean styling
- Easy-to-use React frontend

---

## Installation

### Prerequisites

- Node.js (v16+ recommended)
- npm (v8+ recommended)
- Git

### Step-by-step Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Priyanshu2229140/AI-chatbot.git
   cd AI-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   - Create a `.env` file in the root directory.
   - Add your Gemini API key and endpoint:
     ```
     REACT_APP_GEMINI_API_KEY=your-gemini-api-key
     REACT_APP_GEMINI_API_URL=https://your-gemini-api-endpoint.com
     ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   - The app will run locally at `http://localhost:3000` or the port specified in your Vite config.

---

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Enter your prompt in the input box.
- Submit to receive a markdown-formatted response from the Gemini AI.

---

## API Details

The app communicates with the Gemini AI API as follows:

### Request

- **Endpoint:** Defined in `REACT_APP_GEMINI_API_URL`
- **Method:** `POST`
- **Headers:**
  - `Authorization: Bearer <API_KEY>`
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "prompt": "Your question or request here"
  }
  ```

### Response

- **Format:** JSON
- **Fields:**
  - `response` (string, markdown-formatted)
  - `status` (string, e.g. "success", "error")
  - `error` (optional, string)

### Example

```json
// Request payload
{
  "prompt": "Write a hello world program in Python"
}

// Response
{
  "response": "```python\nprint('Hello, world!')\n```",
  "status": "success"
}
```

---

## Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a new branch**
   ```bash
   git checkout -b your-feature-branch
   ```
3. **Make your changes**
   - Follow the code style used in the project.
   - Write clear commit messages.

4. **Push your branch**
   ```bash
   git push origin your-feature-branch
   ```

5. **Open a Pull Request**
   - Describe your changes clearly.
   - Reference any related issues.

6. **Wait for review and feedback**

### Code Style

- Use [Prettier](https://prettier.io/) for code formatting.
- Follow standard React and JavaScript best practices.

### Reporting Issues

- Use the Issues tab to report bugs or request features.
- Provide steps to reproduce, expected behavior, and screenshots if possible.

---

## License

This project is licensed under the MIT License.
