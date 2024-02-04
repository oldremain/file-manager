import os from "node:os";
import { printCurrentWorkingDirectory } from "../../lib/directory.js";
import { changeDirectory } from "../../lib/directory.js";
import { getUserName } from "../../lib/userName.js";

export const greetUser = () => {
  const userName = getUserName();
  console.log(`Welcome to the File Manager, ${userName}!`);

  changeDirectory(os.homedir());
  printCurrentWorkingDirectory();
};
