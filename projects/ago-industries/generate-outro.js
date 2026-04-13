import RunwayML from '@runwayml/sdk';

const client = new RunwayML();

async function generateOutro() {
  console.log("Generating new AGO outro clip...");

  const task = await client.textToVideo.create({
    model: 'veo3',
    promptText: 'Professional corporate outro animation on orange gradient background, large bold white text "AGO Industries" appears first, then subtitle "Manufacturers of Industrial Safety Products" fades in below, finally website "www.ago1.com" and phone "519-452-3780" appear at bottom, clean elegant motion graphics, high quality corporate video ending',
    duration: 8,
    ratio: '1280:720'
  });

  console.log("Task ID:", task.id);

  let result;
  do {
    await new Promise(r => setTimeout(r, 5000));
    result = await client.tasks.retrieve(task.id);
    console.log("Status:", result.status);
  } while (result.status === "PENDING" || result.status === "RUNNING");

  if (result.status === "SUCCEEDED") {
    console.log("Success! URL:", result.output);
  } else {
    console.error("Failed:", result);
  }
}

generateOutro();
