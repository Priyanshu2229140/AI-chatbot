import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI("AIzaSyDkxeJR4189LICcKvzs4TZ6Pt6ChBSAS4I");

async function main(prompt) {
  const model = ai.getGenerativeModel({ model: "gemini-2.5-flash-preview-05-20" });

  const result = await model.generateContent([prompt]);
  const response = await result.response;
  const text = await response.text();

  console.log(text);
  return text;
}

export default main;
