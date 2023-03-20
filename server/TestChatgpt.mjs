import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-DLPJy4xLO2qZRomvXIunuHRa",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();