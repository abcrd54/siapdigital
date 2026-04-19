import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const inputDir = path.resolve("public/images");
const exts = new Set([".png", ".jpg", ".jpeg"]);
const keepOriginal = new Set(["logo-site.png"]);

const entries = await fs.readdir(inputDir, { withFileTypes: true });
const targets = entries
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .filter((name) => exts.has(path.extname(name).toLowerCase()))
  .filter((name) => !keepOriginal.has(name));

for (const filename of targets) {
  const sourcePath = path.join(inputDir, filename);
  const outputPath = path.join(
    inputDir,
    `${path.basename(filename, path.extname(filename))}.webp`,
  );

  const image = sharp(sourcePath, { failOn: "none" }).rotate();
  const metadata = await image.metadata();

  const resized = metadata.width && metadata.width > 1600
    ? image.resize({ width: 1600, withoutEnlargement: true })
    : image;

  await resized.webp({ quality: 76, effort: 6 }).toFile(outputPath);

  const [sourceStat, outputStat] = await Promise.all([
    fs.stat(sourcePath),
    fs.stat(outputPath),
  ]);

  console.log(
    `${filename} -> ${path.basename(outputPath)} | ${sourceStat.size} -> ${outputStat.size}`,
  );
}
