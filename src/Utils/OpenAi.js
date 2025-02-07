import { OpenAI } from "openai";

const Client = new OpenAI({
  apiKey: "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",
    dangerouslyAllowBrowser: true, // Required for browser usage
});

export default Client;
