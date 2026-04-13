import RunwayML from '@runwayml/sdk';
import fs from 'fs';
import path from 'path';

const client = new RunwayML();

async function generateFlatShirt() {
  console.log("Generating flat shirt image from AGO product photo...");

  const imagePath = '/Volumes/PRO-G40/CortecWebsite/projects/ago-industries/ago_shirt_original.jpg';
  const imageData = fs.readFileSync(imagePath);
  const base64Image = imageData.toString('base64');
  const mimeType = 'image/jpeg';
  const dataUri = `data:${mimeType};base64,${base64Image}`;

  try {
    const task = await client.imageToVideo.create({
      model: "gen3a_turbo",
      promptImage: dataUri,
      promptText: "The orange hi-vis safety shirt is gently laid down flat on a clean white table, camera shows top-down view of the shirt spread out neatly, sleeves extended, professional product photography",
      duration: 5,
      ratio: "1280:768"
    });

    console.log("Task ID:", task.id);

    let result;
    do {
      await new Promise(r => setTimeout(r, 5000));
      result = await client.tasks.retrieve(task.id);
      console.log("Status:", result.status);
    } while (result.status === "PENDING" || result.status === "RUNNING");

    if (result.status === "SUCCEEDED") {
      console.log("Success! Video URL:", result.output);
      return result.output;
    } else {
      console.error("Failed:", result);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

generateFlatShirt();
