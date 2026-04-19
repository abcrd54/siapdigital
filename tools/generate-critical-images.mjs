import path from "node:path";
import sharp from "sharp";

const inputDir = path.resolve("public/images");

const jobs = [
  {
    input: "logo-site.png",
    outputs: [
      { file: "logo-site-176.webp", width: 176, quality: 82 },
      { file: "logo-site-352.webp", width: 352, quality: 84 },
    ],
  },
  {
    input: "owner.webp",
    outputs: [
      { file: "owner-420.webp", width: 420, quality: 78 },
      { file: "owner-840.webp", width: 840, quality: 80 },
    ],
  },
];

for (const job of jobs) {
  const source = path.join(inputDir, job.input);

  for (const output of job.outputs) {
    const target = path.join(inputDir, output.file);
    await sharp(source)
      .resize({ width: output.width, withoutEnlargement: true })
      .webp({ quality: output.quality, effort: 6 })
      .toFile(target);

    console.log(`${job.input} -> ${output.file}`);
  }
}
