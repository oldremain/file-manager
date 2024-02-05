import fs from "node:fs";
import { getAbsolutePath } from "../../lib/path.js";
import { logExecutionError } from "../../lib/error.js";

export const catFile = async (file) => {
  const filePath = getAbsolutePath(file);
  const readStream = fs.createReadStream(filePath);

  readStream.pipe(process.stdout);

  readStream.on("error", logExecutionError);

  return new Promise((resolve) => {
    readStream.on("end", resolve);
  });
};
