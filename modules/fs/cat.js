import fs from "node:fs";
import { getAbsolutePath } from "../../lib/path.js";
import { printCurrentWorkingDirectory } from "../../lib/directory.js";

export const catFile = async (file) => {
  const filePath = getAbsolutePath(file);
  const readStream = fs.createReadStream(filePath);

  readStream.pipe(process.stdout);

  readStream.on("end", () => printCurrentWorkingDirectory());
};
