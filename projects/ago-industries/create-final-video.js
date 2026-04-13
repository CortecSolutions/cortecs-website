import puppeteer from 'puppeteer';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import fs from 'fs';
import path from 'path';

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const projectDir = '/Volumes/PRO-G40/CortecWebsite/projects/ago-industries';
const framesDir = `${projectDir}/frames`;
const outroFramesDir = `${projectDir}/outro-frames`;

// Ensure frames directories exist
if (!fs.existsSync(framesDir)) fs.mkdirSync(framesDir, { recursive: true });
if (!fs.existsSync(outroFramesDir)) fs.mkdirSync(outroFramesDir, { recursive: true });

async function captureFrames() {
  console.log('Launching browser to capture measurement section...');

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 1280, height: 720 }
  });

  const page = await browser.newPage();
  await page.goto(`file://${projectDir}/measurement-section.html`);
  await page.waitForSelector('.scene.active');

  const fps = 30;
  const scenes = [
    { scene: 1, duration: 4 },  // Prepare - 4 seconds
    { scene: 2, duration: 5 },  // Width - 5 seconds
    { scene: 3, duration: 5 },  // Length - 5 seconds
    { scene: 4, duration: 5 }   // Size Chart - 5 seconds
  ];

  let frameNum = 0;

  for (const { scene, duration } of scenes) {
    console.log(`Capturing Scene ${scene} (${duration}s)...`);
    await page.evaluate((s) => showScene(s), scene);
    await new Promise(r => setTimeout(r, 100));

    const totalFrames = duration * fps;
    for (let f = 0; f < totalFrames; f++) {
      const framePath = `${framesDir}/frame_${String(frameNum).padStart(5, '0')}.png`;
      await page.screenshot({ path: framePath });
      frameNum++;
      if (f % fps === 0) await new Promise(r => setTimeout(r, 33));
    }
  }

  await browser.close();
  console.log(`Captured ${frameNum} measurement frames`);
  return frameNum;
}

async function captureOutroFrames() {
  console.log('Capturing outro section...');

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 1280, height: 720 }
  });

  const page = await browser.newPage();
  await page.goto(`file://${projectDir}/outro-section.html`);
  await new Promise(r => setTimeout(r, 500));

  const fps = 30;
  const duration = 6; // 6 seconds for outro
  const totalFrames = duration * fps;

  for (let f = 0; f < totalFrames; f++) {
    const framePath = `${outroFramesDir}/frame_${String(f).padStart(5, '0')}.png`;
    await page.screenshot({ path: framePath });
  }

  await browser.close();
  console.log(`Captured ${totalFrames} outro frames`);
  return totalFrames;
}

async function framesToVideo(inputDir, outputPath, label) {
  console.log(`Converting ${label} frames to video...`);

  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(`${inputDir}/frame_%05d.png`)
      .inputOptions(['-framerate 30'])
      .outputOptions(['-c:v libx264', '-pix_fmt yuv420p', '-preset fast', '-crf 22'])
      .output(outputPath)
      .on('progress', (p) => {
        if (p.frames) process.stdout.write(`\r${label}: ${p.frames} frames`);
      })
      .on('end', () => {
        console.log(`\n${label} video created!`);
        resolve(outputPath);
      })
      .on('error', reject)
      .run();
  });
}

async function normalizeVideo(inputPath, outputPath) {
  console.log(`Normalizing ${path.basename(inputPath)}...`);

  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .outputOptions(['-c:v libx264', '-pix_fmt yuv420p', '-preset fast', '-crf 22', '-r 30', '-s 1280x720', '-an'])
      .output(outputPath)
      .on('end', () => {
        console.log(`Normalized: ${path.basename(outputPath)}`);
        resolve(outputPath);
      })
      .on('error', reject)
      .run();
  });
}

async function combineVideos(videos, output) {
  console.log('Combining all videos...');

  const listPath = `${projectDir}/filelist.txt`;
  const fileList = videos.map(v => `file '${v}'`).join('\n');
  fs.writeFileSync(listPath, fileList);

  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(listPath)
      .inputOptions(['-f concat', '-safe 0'])
      .outputOptions(['-c copy'])
      .output(output)
      .on('end', () => {
        console.log('Final video created!');
        fs.unlinkSync(listPath);
        resolve(output);
      })
      .on('error', reject)
      .run();
  });
}

async function cleanup() {
  // Clean up measurement frames
  if (fs.existsSync(framesDir)) {
    const files = fs.readdirSync(framesDir);
    for (const file of files) fs.unlinkSync(`${framesDir}/${file}`);
    fs.rmdirSync(framesDir);
  }
  // Clean up outro frames
  if (fs.existsSync(outroFramesDir)) {
    const files = fs.readdirSync(outroFramesDir);
    for (const file of files) fs.unlinkSync(`${outroFramesDir}/${file}`);
    fs.rmdirSync(outroFramesDir);
  }
  // Clean up temp videos
  const temps = ['intro_normalized.mp4', 'measurement_normalized.mp4', 'outro_normalized.mp4', 'outro-section.mp4'];
  for (const f of temps) {
    const p = `${projectDir}/${f}`;
    if (fs.existsSync(p)) fs.unlinkSync(p);
  }
}

async function main() {
  console.log('===========================================');
  console.log('AGO Industries - Final Video Assembly');
  console.log('===========================================\n');

  try {
    // Step 1: Capture measurement section frames
    await captureFrames();

    // Step 2: Capture outro frames
    await captureOutroFrames();

    // Step 3: Convert frames to videos
    const measurementVideo = await framesToVideo(framesDir, `${projectDir}/measurement-section.mp4`, 'Measurement');
    const outroVideo = await framesToVideo(outroFramesDir, `${projectDir}/outro-section.mp4`, 'Outro');

    // Step 4: Normalize all videos
    const introNorm = await normalizeVideo(`${projectDir}/intro.mp4`, `${projectDir}/intro_normalized.mp4`);
    const measurementNorm = await normalizeVideo(measurementVideo, `${projectDir}/measurement_normalized.mp4`);
    const outroNorm = await normalizeVideo(outroVideo, `${projectDir}/outro_normalized.mp4`);

    // Step 5: Combine all videos
    const finalVideo = await combineVideos(
      [introNorm, measurementNorm, outroNorm],
      `${projectDir}/AGO_Sizing_Guide_Final.mp4`
    );

    // Step 6: Cleanup
    await cleanup();

    console.log('\n===========================================');
    console.log('SUCCESS! Final video created:');
    console.log(finalVideo);
    console.log('===========================================');

  } catch (error) {
    console.error('Error:', error);
  }
}

main();
