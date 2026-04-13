import RunwayML from '@runwayml/sdk';

const client = new RunwayML({
  apiKey: process.env.RUNWAY_API_KEY || "key_4d0c6d674436b204c3264f9ced86b489e717ece4d73ae4d6c8e089510144b43137026b914cd62ee11224e2ab18b6fc2f1e77fb5802b859ba282e938330313c33"
});

async function generateVideo(prompt) {
  console.log("\n--- Starting video generation ---");
  console.log("Prompt:", prompt.substring(0, 60) + "...");

  try {
    const task = await client.textToVideo.create({
      model: "gen3a_turbo",
      promptText: prompt,
      duration: 5,
      ratio: "1280:768"
    });

    console.log("Task ID:", task.id);

    // Poll for completion
    let result;
    do {
      await new Promise(r => setTimeout(r, 5000)); // Wait 5 seconds
      result = await client.tasks.retrieve(task.id);
      console.log("Status:", result.status);
    } while (result.status === "PENDING" || result.status === "RUNNING");

    if (result.status === "SUCCEEDED") {
      console.log("Video URL:", result.output);
      return result.output;
    } else {
      console.error("Failed:", result);
      return null;
    }
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

// Prompts for the video sequence
const prompts = [
  "Silicon microchip with glowing gold circuits dissolving and transforming into cascading streams of green glowing code, Matrix-style flowing data, characters streaming downward, dark background with blue glow, cinematic, smooth morphing transition",
  "Streams of green code converging and materializing into a modern smartphone floating in space, screen glowing with a sleek professional app interface, dark background, cinematic lighting, photorealistic, smooth motion"
];

async function main() {
  const results = [];

  for (let i = 0; i < prompts.length; i++) {
    console.log(`\n=== Generating clip ${i + 1} of ${prompts.length} ===`);
    const url = await generateVideo(prompts[i]);
    if (url) {
      results.push(url);
    }
  }

  console.log("\n=== All videos generated ===");
  console.log("Download URLs:");
  results.forEach((url, i) => console.log(`Clip ${i + 1}: ${url}`));
}

main();
