import dotenv from 'dotenv';

dotenv.config();
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: process.env.GOOGLE_GENAI_API_KEY});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "what is array, explain in short",
  });
  console.log(response.text);
}

await main();