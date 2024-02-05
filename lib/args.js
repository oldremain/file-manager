export const KNOWN_COMMANDS = {
  ".exit": ".exit",
  up: "up",
  cd: "cd",
  ls: "ls",
  cat: "cat",
  add: "add",
  rn: "rn",
  cp: "cp",
  mv: "mv",
  rm: "rm",
  os: "os",
  hash: "hash",
  compress: "compress",
  decompress: "decompress",
};

export const parseCommandLineArgument = (userInput) => {
  const data = userInput.toString().trim().replace(/\s+/g, " ");
  const tokens = data.split(" ");

  if (!Object.keys(KNOWN_COMMANDS).includes(tokens[0])) return [];
  return tokens;
};
