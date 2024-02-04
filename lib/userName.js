export const getUserName = () => {
  const args = process.argv.slice(2);
  const userName = args[0].startsWith("--username")
    ? args[0].split("=")[1]
    : undefined;
  return userName;
};
