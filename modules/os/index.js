import os from "node:os";

export const OS = {
  "--eol": "--eol",
  "--cpus": "--cpus",
  "--homedir": "--homedir",
  "--username": "--username",
  "--architecture": "--architecture",
};

export const printOsEol = () =>
  console.log(os.EOL.replace("\n", "\\n").replace("\r", "\\r"));

export const printCpus = () => {
  const numberFormatter = new Intl.NumberFormat("en", {
    maximumFractionDigits: 1,
  });
  const cpuSpeed = os.cpus()[0].speed.toString().padEnd(4, "0") / 1000;

  console.table([
    {
      Quantity: os.cpus().length,
      Name: os.cpus()[0].model,
      "Speed(GHz)": +numberFormatter.format(cpuSpeed),
    },
  ]);
};

export const printHomeDir = () => console.log(os.homedir());

export const printUserName = () => console.log(os.userInfo().username);

export const printCPUArchitecture = () => console.log(os.arch());
