import dotenv from 'dotenv';

dotenv.config();
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: process.env.GOOGLE_GENAI_API_KEY});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts:[{text: "Hi , my name satyam"}],
      },
      {
        role: "model",
        parts: [{text:"Hi Satyam! It's great to meet you ! How can I help you today?"}]
      },
      {
        role: "user",
        parts:[{text: "what is my name?"}],
      }
    ],
  });
  console.log(response.text);
}

await main();