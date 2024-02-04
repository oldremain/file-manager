import os from "node:os";

import { greetUser } from "./modules/user/greetUser.js";
import { goodbayUser } from "./modules/user/goodbayUser.js";

import { goUpDirectory } from "./modules/directory/goUpDirectory.js";
import { goToSpecificDirectory } from "./modules/directory/goToSpecificDirectory.js";
import { printDirContent } from "./modules/directory/printDirContent.js";

import { catFile } from "./modules/fs/cat.js";
import { addFile } from "./modules/fs/add.js";
import { renameFile } from "./modules/fs/rename.js";
import { moveFile } from "./modules/fs/move.js";
import { deleteFile } from "./modules/fs/delete.js";

import { printCurrentWorkingDirectory } from "./lib/directory.js";
import { parseCommandLineArgument } from "./lib/args.js";

greetUser();

process.stdin.on("data", async (input) => {
  const data = input.toString().trim();
  if (data.startsWith(".exit")) {
    process.exit();
  }
  if (data.startsWith("up")) {
    goUpDirectory();
    printCurrentWorkingDirectory();
  }
  if (data.startsWith("cd")) {
    const [path] = parseCommandLineArgument(data);
    goToSpecificDirectory(path);
    printCurrentWorkingDirectory();
  }
  if (data.startsWith("ls")) {
    const [path] = parseCommandLineArgument(data);
    await printDirContent(path);
    printCurrentWorkingDirectory();
  }
  if (data.startsWith("cat")) {
    const [file] = parseCommandLineArgument(data);
    await catFile(file);
  }
  if (data.startsWith("add")) {
    const [file] = parseCommandLineArgument(data);
    addFile(file);
  }
  if (data.startsWith("rn")) {
    const [oldPath, newPath] = parseCommandLineArgument(data);
    await renameFile(oldPath, newPath);
    printCurrentWorkingDirectory();
  }
  if (data.startsWith("mv")) {
    const [oldPath, newPath] = parseCommandLineArgument(data);
    await moveFile(oldPath, newPath);
    printCurrentWorkingDirectory();
  }
  if (data.startsWith("rm")) {
    const [path] = parseCommandLineArgument(data);
    await deleteFile(path);
    printCurrentWorkingDirectory();
  }
  //cd ./Downloads/file-manager
});

//After program work finished (ctrl + c pressed or user sent .exit command into console) the program displays the following text in the console
process.on("SIGINT", () => {
  process.exit();
});
process.on("exit", () => {
  goodbayUser();
});
process.on("error", () => {
  //TODO need not shut down process, but show error and countinue application !!!
  goodbayUser();
});
