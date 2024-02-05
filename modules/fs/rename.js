import fs from "node:fs/promises";
import { getAbsolutePath } from "../../lib/path.js";

export const renameFile = async (oldPath, newPath) => {
  const oldFilePath = getAbsolutePath(oldPath);
  const newFilePath = getAbsolutePath(newPath);
  await fs.rename(oldFilePath, newFilePath);
};
