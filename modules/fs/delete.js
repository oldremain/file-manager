import fs from "node:fs/promises";
import { getAbsolutePath } from "../../lib/path.js";

export const deleteFile = async (path) => {
  const filePath = getAbsolutePath(path);
  await fs.rm(filePath);
};
