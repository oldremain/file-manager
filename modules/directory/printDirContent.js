import fs from "node:fs/promises";
import { getCurrentWorkingDirectory } from "../../lib/directory.js";

export const printDirContent = async (path) => {
  let readPath;
  if (!path) readPath = getCurrentWorkingDirectory();
  else readPath = path;
  const dirFiles = await fs.readdir(readPath, {
    encoding: "utf-8",
    withFileTypes: true,
  });

  if (dirFiles.length) {
    const folders = [];
    const files = [];

    dirFiles
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((it) =>
        it.isDirectory()
          ? folders.push({ Name: it.name, Type: "directory" })
          : files.push({ Name: it.name, Type: "file" })
      );

    // console.log(files);

    console.table([...folders, ...files]);
  }
};
