import { getUserName } from "../../lib/userName.js";

export const goodbayUser = () => {
  const userName = getUserName();
  console.log(`\nThank you for using File Manager, ${userName}, goodbye!\n`);
};
