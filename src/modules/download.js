import { favoriteArray } from "./favorites.js";

const downloadFunc = () => {
  const favStr = favoriteArray.join("\n\n");
  const blob = new Blob([favStr], { type: "text/plain" });
  return URL.createObjectURL(blob);
};
export default downloadFunc;
