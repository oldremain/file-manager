import fs from "node:fs";
import zlib from "node:zlib";
import { getAbsolutePath } from "../../lib/path.js";

export const compressFile = (sourcePath, destPath) => {
  const sourceFile = getAbsolutePath(sourcePath);
  const destFile = getAbsolutePath(destPath);

  const brotli = zlib.createBrotliCompress();
  const readStream = fs.createReadStream(sourceFile);
  const writeStream = fs.createWriteStream(destFile);

  readStream.on("error", console.error);
  writeStream.on("error", console.error);
  brotli.on("error", console.error);

  const stream = readStream.pipe(brotli).pipe(writeStream);

  return new Promise((resolve) => {
    stream.on("finish", () => {
      resolve();
    });
  });
};
