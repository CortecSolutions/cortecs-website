import RunwayML from '@runwayml/sdk';
import fs from 'fs';

const client = new RunwayML();

// Load the AGO shirt image
const imagePath = '/Volumes/PRO-G40/CortecWebsite/projects/ago-industries/ago_shirt_original.jpg';
const imageData = fs.readFileSync(imagePath);
const base64Image = imageData.toString('base64');
const dataUri = `data:image/jpeg;base64,${base64Image}`;

const clips = [
  {
    name: "01_lay_flat",
    prompt: "The person gently lays the orange hi-vis shirt flat on a clean white table, smoothing out the fabric with their hands, the shirt is spread out neatly with the back facing up, professional instructional video style"
  },
  {
    name: "02_measure_width",
    prompt: "Hands holding a yellow measuring tape stretch it horizontally across the orange shirt laid flat on the table, measuring from one side to the other across the chest area, close-up instructional demonstration"
  },
  {
    name: "03_measure_length",
    prompt: "Hands use a yellow measuring tape to measure vertically from the collar down to the bottom hem of the orange shirt laid flat on the white table, professional product demonstration video"
  }
];

async function generateClip(clipInfo, useImage = true) {
  console.log(`\n--- Generating: ${clipInfo.name} ---`);
  console.log(`Prompt: ${clipInfo.prompt.substring(0, 80)}...`);

  try {
    let task;
    if (useImage) {
      task = await client.imageToVideo.create({
        model: "gen3a_turbo",
        promptImage: dataUri,
        promptText: clipInfo.prompt,
        duration: 5,
        ratio: "1280:768"
      });
    } else {
      task = await client.textToVideo.create({
        model: "veo3",
        promptText: clipInfo.prompt,
        duration: 8,
        ratio: "1280:720"
      });
    }

    console.log("Task ID:", task.id);

    let result;
    do {
      await new Promise(r => setTimeout(r, 5000));
      result = await client.tasks.retrieve(task.id);
      console.log("Status:", result.status);
    } while (result.status === "PENDING" || result.status === "RUNNING");

    if (result.status === "SUCCEEDED") {
      console.log(`✓ ${clipInfo.name} complete!`);
      console.log("Video URL:", result.output);
      return { name: clipInfo.name, url: result.output, success: true };
    } else {
      console.error(`✗ ${clipInfo.name} failed:`, result);
      return { name: clipInfo.name, success: false, error: result };
    }
  } catch (error) {
    console.error(`✗ ${clipInfo.name} error:`, error.message);
    return { name: clipInfo.name, success: false, error: error.message };
  }
}

async function main() {
  console.log("==========================================");
  console.log("AGO Industries - Sizing Guide Video");
  console.log("Using actual AGO product image");
  console.log("==========================================\n");

  const clipIndex = parseInt(process.argv[2]);
  const useTextOnly = process.argv[3] === 'text';

  if (!isNaN(clipIndex) && clipIndex >= 0 && clipIndex < clips.length) {
    console.log(`Generating clip ${clipIndex + 1} of ${clips.length}`);
    const result = await generateClip(clips[clipIndex], !useTextOnly);
    console.log("\n=== Result ===");
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log("Available clips:");
    clips.forEach((clip, i) => console.log(`  ${i}: ${clip.name}`));
    console.log("\nUsage: node generate-sizing-video.js [clip_number] [text]");
    console.log("  Add 'text' for text-to-video instead of image-to-video");
  }
}

main();
