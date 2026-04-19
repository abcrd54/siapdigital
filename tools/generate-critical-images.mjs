import path from "node:path";
import sharp from "sharp";

const inputDir = path.resolve("public/images");

const jobs = [
  {
    input: "logo-site.png",
    outputs: [
      { file: "logo-site-160.avif", width: 160, quality: 56, format: "avif" },
      { file: "logo-site-320.avif", width: 320, quality: 58, format: "avif" },
      { file: "logo-site-160.webp", width: 160, quality: 76, format: "webp" },
      { file: "logo-site-320.webp", width: 320, quality: 78, format: "webp" },
    ],
  },
  {
    input: "owner.webp",
    outputs: [
      { file: "owner-340.avif", width: 340, quality: 54, format: "avif" },
      { file: "owner-680.avif", width: 680, quality: 56, format: "avif" },
      { file: "owner-340.webp", width: 340, quality: 72, format: "webp" },
      { file: "owner-680.webp", width: 680, quality: 74, format: "webp" },
    ],
  },
];

for (const job of jobs) {
  const source = path.join(inputDir, job.input);

  for (const output of job.outputs) {
    const target = path.join(inputDir, output.file);
    const pipeline = sharp(source).resize({
      width: output.width,
      withoutEnlargement: true,
    });

    if (output.format === "avif") {
      await pipeline.avif({ quality: output.quality, effort: 7 }).toFile(target);
    } else {
      await pipeline.webp({ quality: output.quality, effort: 6 }).toFile(target);
    }

    console.log(`${job.input} -> ${output.file}`);
  }
}
