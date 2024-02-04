import { goUpDirectory } from "./goUpDirectory.js";
import { changeDirectory } from "../../lib/directory.js";
import { getAbsolutePath } from "../../lib/path.js";

export const goToSpecificDirectory = (destPath) => {
  try {
    if (destPath === "..") {
      goUpDirectory();
    } else {
      const destinationPath = getAbsolutePath(destPath);
      changeDirectory(destinationPath);
    }
  } catch (e) {
    console.error(
      `Error changing on specific directory -------> goToSpecificDirectory.js`
    );
    throw new Error(e.message);
  }
};
