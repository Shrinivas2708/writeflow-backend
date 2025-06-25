import { GoogleGenAI } from "@google/genai";
async function main() {

    const ai = new GoogleGenAI({ apiKey: "AIzaSyBH3OCsmFkUxoUo5h_co-CWDUWBX3owxYg" });

    const response = await ai.models.embedContent({
        model: 'gemini-embedding-exp-03-07',
        contents: `Why ChatGPT’s Secret Powers Matter in 2025
2025 is wild. AI is everywhere, and if you’re not riding the ChatGPT wave, you’re basically showing up to a pizza party with just a salad. Over half of companies are using AI right now, and the folks who know how to work with it are landing the best gigs, while everyone else is stuck playing catch-up. But here’s the kicker: ChatGPT actually has a bunch of hidden features that most people don’t even know about. If you want to get ahead (or just keep up), you’ve really gotta unlock these secret powers to get the most bang for you buck out of the platform.

Unlocking ChatGPT’s Full Potential
Have you ever wished you could just show someone what’s on your phone instead of explaining it for the tenth time? Now you can literally share your screen with ChatGPT. This isn’t just for tech geeks — it’s a game-changer for anyone who wants real-time help or collaboration with what they are currently working on.`,
    });

    console.log(response.embeddings);
}

main();