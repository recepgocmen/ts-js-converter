import openai from "openai";

const apiKey = "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";
const model = "text-davinci-002";

async function convertCode(code, targetLanguage) {
  const prompt = `Convert the following ${targetLanguage} code to ${
    targetLanguage === "typescript" ? "JavaScript" : "TypeScript"
  }:\n\n${code}`;

  try {
    const response = await openai.complete({
      engine: model,
      prompt,
      maxTokens: 1024,
      n: 1,
      stop: ["\n\n"],
      apiKey: apiKey,
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.log("OpenAI API error:", error);
    return "";
  }
}

export default convertCode;
