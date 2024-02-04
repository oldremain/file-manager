import fsPromises from "node:fs/promises";
import fs from "node:fs";
import { getAbsolutePath } from "../../lib/path.js";

export const moveFile = async (oldPath, newPath) => {
  const oldFilePath = getAbsolutePath(oldPath);
  const newFilePath = getAbsolutePath(newPath);

  const readStream = fs.createReadStream(oldFilePath);
  const writeStream = fs.createWriteStream(newFilePath);

  readStream.pipe(writeStream);

  readStream.on("end", () => {
    fsPromises.rm(oldFilePath);
  });

  readStream.on("error", console.error);
  writeStream.on("error", console.error);
};
