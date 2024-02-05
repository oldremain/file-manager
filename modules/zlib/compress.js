import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { getAbsolutePath } from "../../lib/path.js";
import { logExecutionError } from "../../lib/error.js";

export const compressFile = (file, dir) => {
  const sourceFile = getAbsolutePath(file);
  const fileName = path.parse(sourceFile).base;
  const destinationPath = getAbsolutePath(dir) + `${path.sep}${fileName}.br`;

  const brotli = zlib.createBrotliCompress();
  const readStream = fs.createReadStream(sourceFile);
  const writeStream = fs.createWriteStream(destinationPath);

  readStream.on("error", logExecutionError);
  writeStream.on("error", logExecutionError);
  brotli.on("error", logExecutionError);

  const stream = readStream.pipe(brotli).pipe(writeStream);

  return new Promise((resolve) => {
    stream.on("finish", resolve);
  });
};
