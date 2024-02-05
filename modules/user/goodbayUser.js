import { getUserName } from "../../lib/userName.js";

export const goodbayUser = () => {
  console.log(
    `\nThank you for using File Manager, ${getUserName()}, goodbye!\n`
  );
};
