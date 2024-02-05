export const getCurrentWorkingDirectory = () => process.cwd();

export const printCurrentWorkingDirectory = () =>
  console.log(`\nYou are currently in ${process.cwd()}\n`);

export const changeDirectory = (path) => process.chdir(path);
