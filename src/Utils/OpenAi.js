import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: "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", // Direct API Key (Unsafe)
  dangerouslyAllowBrowser: true, // Required for browser usage
});

export default openai;
