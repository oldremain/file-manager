import { goUpDirectory } from "./goUpDirectory.js";
import { changeDirectory } from "../../lib/directory.js";
import { getAbsolutePath } from "../../lib/path.js";

export const goToSpecificDirectory = (destPath) => {
  if (destPath === "..") {
    goUpDirectory();
  } else {
    changeDirectory(getAbsolutePath(destPath));
  }
};
