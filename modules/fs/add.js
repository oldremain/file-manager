import fs from "node:fs";
import path from "node:path";
import {
  printCurrentWorkingDirectory,
  getCurrentWorkingDirectory,
} from "../../lib/directory.js";

export const addFile = (file) => {
  const filePath = `${getCurrentWorkingDirectory()}${path.sep}${file}`;
  const writableStream = fs.createWriteStream(filePath);

  writableStream.end();

  printCurrentWorkingDirectory();

  writableStream.on("error", console.error);
};
