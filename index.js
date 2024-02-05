import { greetUser, goodbayUser } from "./modules/user/index.js";
import {
  goUpDirectory,
  goToSpecificDirectory,
  printDirContent,
} from "./modules/directory/index.js";
import {
  catFile,
  addFile,
  renameFile,
  copyFile,
  moveFile,
  deleteFile,
} from "./modules/fs/index.js";
import {
  OS,
  printOsEol,
  printCpus,
  printHomeDir,
  printUserName,
  printCPUArchitecture,
} from "./modules/os/index.js";
import { calcHash } from "./modules/hash/index.js";
import { compressFile, decompressFile } from "./modules/zlib/index.js";
import { printCurrentWorkingDirectory } from "./lib/directory.js";
import { parseCommandLineArgument, KNOWN_COMMANDS } from "./lib/args.js";
import { logInputError, logExecutionError } from "./lib/error.js";

const bootstrap = () => {
  greetUser();
  process.stdin.on("data", async (input) => {
    try {
      const [command, ...args] = parseCommandLineArgument(input);
      if (!command) {
        logInputError();
        return;
      }
      if (command.startsWith(KNOWN_COMMANDS[".exit"])) {
        process.exit();
      }

      /* Directory  module */
      if (command.startsWith(KNOWN_COMMANDS.up)) {
        goUpDirectory();
      } else if (command.startsWith(KNOWN_COMMANDS.cd)) {
        goToSpecificDirectory(args[0]);
      }
      /* End of Directory  module */

      /* File System module */
      if (command.startsWith(KNOWN_COMMANDS.ls)) {
        await printDirContent(args[0]);
      } else if (command.startsWith(KNOWN_COMMANDS.cat)) {
        await catFile(args[0]);
      } else if (command.startsWith(KNOWN_COMMANDS.add)) {
        await addFile(args[0]);
      } else if (command.startsWith(KNOWN_COMMANDS.rn)) {
        await renameFile(args[0], args[1]);
      } else if (command.startsWith(KNOWN_COMMANDS.cp)) {
        await copyFile(args[0], args[1]);
      } else if (command.startsWith(KNOWN_COMMANDS.mv)) {
        await moveFile(args[0], args[1]);
      } else if (command.startsWith(KNOWN_COMMANDS.rm)) {
        await deleteFile(args[0]);
      }
      /* End of File System module */

      /* OS module */
      if (command.startsWith(KNOWN_COMMANDS.os)) {
        switch (args[0].toLowerCase()) {
          //For autocompletion:)
          case OS["--eol"]:
            printOsEol();
            break;
          case OS["--cpus"]:
            printCpus();
            break;
          case OS["--homedir"]:
            printHomeDir();
            break;
          case OS["--username"]:
            printUserName();
            break;
          case OS["--architecture"]:
            printCPUArchitecture();
            break;
          default:
            logInputError();
        }
      }
      /* End of OS module */

      /* Hash module */
      if (command.startsWith(KNOWN_COMMANDS.hash)) {
        await calcHash(args[0]);
      }
      /* End of Hash module */

      /* Brotli module */
      if (command.startsWith(KNOWN_COMMANDS.compress)) {
        await compressFile(args[0], args[1]);
      } else if (command.startsWith(KNOWN_COMMANDS.decompress)) {
        await decompressFile(args[0], args[1]);
      }
      /* End of Brotli module */

      printCurrentWorkingDirectory();
    } catch {
      logExecutionError();
    }
  });

  process.on("SIGINT", () => {
    process.exit();
  });
  process.on("exit", () => {
    goodbayUser();
  });
};

bootstrap();
