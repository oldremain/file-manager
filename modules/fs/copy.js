import fs from "node:fs";
import path from "node:path";
import { getAbsolutePath } from "../../lib/path.js";
import { logExecutionError } from "../../lib/error.js";

export const copyFile = async (file, dir) => {
  const sourceFile = getAbsolutePath(file);
  const fileName = path.parse(sourceFile).base;
  const destinationPath = getAbsolutePath(dir) + `${path.sep}${fileName}`;

  const readStream = fs.createReadStream(sourceFile);
  const writeStream = fs.createWriteStream(destinationPath);

  readStream.pipe(writeStream);

  readStream.on("error", logExecutionError);
  writeStream.on("error", logExecutionError);

  return new Promise((resolve) => {
    writeStream.on("finish", resolve);
  });
};
