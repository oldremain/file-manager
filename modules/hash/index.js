import fs from "node:fs";
import { createHash } from "node:crypto";
import { getAbsolutePath } from "../../lib/path.js";
import { logExecutionError } from "../../lib/error.js";

export const calcHash = (path) => {
  const filePath = getAbsolutePath(path);
  const hash = createHash("sha256");
  const readStream = fs.createReadStream(filePath, "utf-8");

  readStream.on("error", logExecutionError);

  return new Promise((resolve) => {
    readStream.pipe(hash).setEncoding("hex").pipe(process.stdout);
    readStream.on("end", resolve);
  });
};
