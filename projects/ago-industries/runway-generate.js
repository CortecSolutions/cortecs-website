import RunwayML from '@runwayml/sdk';

const client = new RunwayML();

// AGO Industries - Sizing Guide Video
// Focused on specific measuring actions
const clips = [
  {
    name: "01_orange_tshirt_flat",
    prompt: "Top-down photograph of a plain solid orange t-shirt laid perfectly flat on a clean white table, the shirt is neatly spread out showing full shape with sleeves extended, simple minimal composition, bright even lighting, product photography style, no wrinkles, 4K quality"
  },
  {
    name: "02_measure_width",
    prompt: "Close-up top-down shot of two hands holding a yellow measuring tape horizontally across a plain orange t-shirt laid flat on white table, measuring the width from one side seam to the other across the chest area, clear professional lighting, instructional video style, 4K"
  },
  {
    name: "03_measure_length",
    prompt: "Close-up shot of hands using a measuring tape vertically on a plain orange t-shirt laid flat, measuring from the collar down to the bottom hem, the tape stretches the full length of the garment, professional product demonstration, white table background, 4K quality"
  }
];

async function generateClip(clipInfo) {
  console.log(`\n--- Generating: ${clipInfo.name} ---`);
  console.log(`Prompt: ${clipInfo.prompt.substring(0, 100)}...`);

  try {
    const task = await client.textToVideo.create({
      model: "veo3",
      promptText: clipInfo.prompt,
      duration: 8,
      ratio: "1280:720"
    });

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
  console.log("===========================================");
  console.log("AGO Industries - Sizing Guide Video Clips");
  console.log("Measuring Actions Focus");
  console.log("===========================================\n");

  const clipIndex = parseInt(process.argv[2]);

  if (!isNaN(clipIndex) && clipIndex >= 0 && clipIndex < clips.length) {
    console.log(`Generating clip ${clipIndex + 1} of ${clips.length}`);
    const result = await generateClip(clips[clipIndex]);
    console.log("\n=== Result ===");
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log("Available clips:");
    clips.forEach((clip, i) => console.log(`  ${i}: ${clip.name}`));
    console.log("\nUsage: node runway-generate.js [clip_number]");
    console.log("\nExample: node runway-generate.js 0");
  }
}

main();
