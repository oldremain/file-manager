import fs from "node:fs/promises";
import { getAbsolutePath } from "../../lib/path.js";

export const deleteFile = async (path) => {
  const filePath = getAbsolutePath(path);
  //WARN
  //Force: true, because we dont need interrupt program on fail
  await fs.rm(filePath, {
    force: true,
  });
};
