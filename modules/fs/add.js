import fs from "node:fs";
import path from "node:path";
import { getCurrentWorkingDirectory } from "../../lib/directory.js";
import { logExecutionError } from "../../lib/error.js";

export const addFile = async (file) => {
  const filePath = `${getCurrentWorkingDirectory()}${path.sep}${file}`;
  const writableStream = fs.createWriteStream(filePath);

  writableStream.end();
  writableStream.on("error", logExecutionError);

  return new Promise((resolve) => {
    writableStream.on("finish", resolve);
  });
};
