export const getCurrentWorkingDirectory = () => process.cwd();

export const printCurrentWorkingDirectory = () =>
  console.log(`\nYou are currently in ${process.cwd()}\n`);

export const changeDirectory = (path) => {
  try {
    process.chdir(path);
  } catch (e) {
    console.error("Error changing directory ------> directory.js");
    throw new Error(e.message);
  }
};
