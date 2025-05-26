import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDkxeJR4189LICcKvzs4TZ6Pt6ChBSAS4I" });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-05-20",
    contents: [
      { type: "text", text: prompt }
    ],
  });
  console.log(response.text);
  return response.text;
}

// Pass the prompt as an argument:
export default main;
