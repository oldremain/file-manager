import fs from "node:fs";
import { createHash } from "node:crypto";
import { getAbsolutePath } from "../../lib/path.js";

export const calcHash = async (path) => {
  const filePath = getAbsolutePath(path);
  const hash = createHash("sha256");
  const readStream = fs.createReadStream(filePath, "utf-8");

  readStream.on("error", console.error);

  return new Promise((resolve) => {
    readStream.pipe(hash).setEncoding("hex").pipe(process.stdout);

    readStream.on("end", () => {
      resolve();
    });
  });
};
