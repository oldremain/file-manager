import path from "node:path";
import { getCurrentWorkingDirectory } from "../../lib/directory.js";
import { changeDirectory } from "../../lib/directory.js";

export const goUpDirectory = () => {
  const currentWorkingDirectory = getCurrentWorkingDirectory();
  const dirParts = currentWorkingDirectory.split(path.sep);
  //We are placed in root directory, thus can`t go up anymore
  if (dirParts.length === 1) return;

  try {
    const { root } = path.parse(currentWorkingDirectory);
    const destinationPath = dirParts.slice(1, -1).join(path.sep);
    changeDirectory(`${root}${destinationPath}`);
  } catch (e) {
    console.error(
      "Error navigating to the top directory ------> goUpDirectory.js"
    );
    throw new Error(e.message);
  }
};
